1. GET /api/todos
   - Description: Retrieve a list of all todo items.
   - Response:
     ```json
     [
       {
         "id": "todo_id",
         "title": "Todo title",
         "description": "Todo description",
         "completed": false
       },
     ]
     ```

2. POST /api/todos
   - Description: Create a new todo item.
   - Request:
     ```json
     {
       "title": "Todo title",
       "description": "Todo description"
     }
     ```
   - Response:
     ```json
     {
       "id": "new_todo_id",
       "title": "Todo title",
       "description": "Todo description",
       "completed": false
     }
     ```

3. GET /api/todos/:id
   - Description: Retrieve a specific todo item.
   - Parameters:
     - id: The ID of the todo item.
   - Response:
     ```json
     {
       "id": "todo_id",
       "title": "Todo title",
       "description": "Todo description",
       "completed": false
     }
     ```

4. PUT /api/todos/:id
   - Description: Update an existing todo item.
   - Parameters:
     - id: The ID of the todo item.
   - Request:
     ```json
     {
       "title": "Updated todo title",
       "description": "Updated todo description",
       "completed": true
     }
     ```
   - Response:
     ```json
     {
       "id": "todo_id",
       "title": "Updated todo title",
       "description": "Updated todo description",
       "completed": true
     }
     ```

5. DELETE /api/todos/:id
   - Description: Delete a specific todo item.
   - Parameters:
     - id: The ID of the todo item.
   - Response:
     ```json
     {
       "message": "Todo item deleted successfully"
     }
     ```

