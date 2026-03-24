---
title: Understanding React Hooks
date: 2023-06-15
description: Learn how to use React Hooks to manage state and lifecycle in functional components.
author: Alice Johnson
image: '/assets/images/post-03.png'
tags: [React, JavaScript, Web Development]
---

# Understanding React Hooks

React Hooks are a feature that allows you to use state and other React features in functional components. This lets you write simpler and more reusable components without having to convert them into classes.

## useState Hook

The `useState` hook allows you to add state to your functional components.

```javascript
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```

## useEffect Hook

The `useEffect` hook allows you to perform side effects in your functional components, such as fetching external data or modifying the DOM.

```javascript
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```

## Custom Hooks

You can create your own custom hooks to reuse logic across your components.

```javascript
import { useState } from 'react';

function useCounter(initialCount) {
  const [count, setCount] = useState(initialCount);

  const increment = () => {
    setCount(count + 1);
  };

  return { count, increment };
}
```

Then you can use your custom hook in your components.

```javascript
import React from 'react';
import useCounter from './useCounter';

function Counter() {
  const { count, increment } = useCounter(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={increment}>Click me</button>
    </div>
  );
}
```

React Hooks are a powerful feature that allows you to write cleaner and more reusable components in React. Start using them in your projects today!
