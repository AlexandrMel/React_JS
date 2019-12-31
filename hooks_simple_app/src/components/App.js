import React, { useState } from 'react';
import ResourceList from './ResourceList';
import UserList from './UserList';

const App = () => {
    const [ resource, setResourse] = useState('posts');
            return ( <div>
                <UserList />
                <div>
                    <button onClick={() => setResourse('posts')}>Posts</button>
                    <button onClick={() => setResourse('todos')}>Todos</button>
                </div> 
                <ResourceList resource={resource} />
                </div>)
            };

        export default App;