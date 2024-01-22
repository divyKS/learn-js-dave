// higher order functions - that does one or more of the following -> takes one ore more functions as an argument or returns a function as its result

// have to add the type="module" in the scrit tag in html
import { posts } from './posts.js';

// for each loop types, to remove the for loop, can be used when selecting someething from html collections or nodes from the dom or simply in ana rray without using an iterator

posts.forEach((post) => {
    console.log(post);
}); 
console.clear();

const filteredPosts = posts.filter((post)=>{
    return post.userId === 10;
});
console.log(filteredPosts);

const mappedPosts = filteredPosts.map((post)=>{
    return post.I * 10;
});
console.log(mappedPosts);

// accumulates when we reduce so it will not be an array it will simply be a value, we have something to do with an accumulator here
const reducedPostsValue = mappedPosts.reduce((sum, post)=>{
    return sum + post;
});
console.log(reducedPostsValue);