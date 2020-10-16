# as const

* We use `as const` to type assert. And this works great if :

```javascript
function useInfiniteScroll(callback: () => void) {
  const [isFetching, setIsFetching] = useState(false);

  return [isFetching, setIsFetching];
}
```

Theoretically I could return

```javascript
function useInfiniteScroll(callback: () => void)

function useInfiniteScroll(callback: () => void): [boolean, Dispatch<SetStateAction<boolean>>]

// or

const returnArr:[boolean, Dispatch<SetStateAction<boolean>>] = [isFetching, setIsFetching];
```

But those are a bit too verbose. So we could assert \(aka just telling ts directly\) that we know that this array won't change.

> The return type of this function is a `MUTABLE` array and we want to tell TS that it's actually `IMMUTABLE` and therefore you can set the array's type as NON-widening. And Arrays and Objects are `readonly` so they never are able to change their order

Resource: [https://blog.logrocket.com/const-assertions-are-the-killer-new-typescript-feature-b73451f35802/](https://blog.logrocket.com/const-assertions-are-the-killer-new-typescript-feature-b73451f35802/)

