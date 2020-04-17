const express = require('express');

const Recipes = require('./recipes-model.js');

const router = express.Router();

router.get('/', (req, res) => {
  Recipes.getRecipes()
  .then(results => {
    res.json(results);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to load recipes' });
  });
});

router.get('/:id/shoppingList', (req, res) => {
    const { id } = req.params;
  
    Recipes.getShoppingList(id)
    .then(list => {
      if (list.length) {
        res.json(list);
      } else {
        res.status(404).json({ message: 'Could not find shopping list for given recipe' })
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get list' });
    });
  });

  router.get('/:id/instructions', (req, res) => {
    const { id } = req.params;
  
    Recipes.getInstructions(id)
    .then(list => {
      if (list.length) {
        res.json(list);
      } else {
        res.status(404).json({ message: 'Could not find instructions for given recipe' })
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get instructions' });
    });
  });
module.exports = router;