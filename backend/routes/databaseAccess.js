import express from 'express';
const router = express.Router();

// New line here

router.get('/add', (req, res) => {
  const testTodo = new TodoItem({
    task: "test task"
  });

  testTodo.save()
    .then(response => {
      res.send(response);
    })
    .catch(error => {
      res.send(error);
    })
});

export default router;
