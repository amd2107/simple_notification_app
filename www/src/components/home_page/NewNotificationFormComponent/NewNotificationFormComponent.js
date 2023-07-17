import React, { useState, useEffect } from 'react';
import { Form, Button, Spinner } from 'react-bootstrap';
import { fetchCategories, sendNotification } from '../../../services/api';

function NewNotificationFormComponent() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(1);
  const [notificationText, setNotificationText] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCategoryLoading, setIsCategoryLoading] = useState(true);

  useEffect(() => {
    fetchCategories()
      .then(categories => {
        setCategories(categories);
        setIsCategoryLoading(false);
      })
      .catch(error => {
        console.error('Error fetching categories:', error);
        setIsCategoryLoading(false);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    sendNotification(selectedCategory, notificationText)
      .then(response => response.json())
      .then(data => {
        setSelectedCategory('');
        setNotificationText('');
        alert(data.message);
      })
      .catch(error => console.error('Error:', error))
      .finally(() => setIsSubmitting(false));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formCategory" className={"mb-3"}>
        <Form.Label>Category {isCategoryLoading && <Spinner animation="border" size="sm" />}</Form.Label>
        <Form.Control as="select" value={selectedCategory} onChange={e => setSelectedCategory(e.target.value)} disabled={isCategoryLoading}>
          {categories.map(category => (
            <option value={category.id} key={category.id}>
              {category.name}
            </option>
          ))}
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="formNotificationText" className={"mb-3"}>
        <Form.Label>Notification Text</Form.Label>
        <Form.Control
          as="textarea"
          value={notificationText !== null ? notificationText : ''}
          onChange={e => setNotificationText(e.target.value)}
        />

      </Form.Group>
      <Button variant="primary" type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Loading...' : 'Submit'}
      </Button>
    </Form>
  );
}

export default NewNotificationFormComponent;
