import { useMemo } from "react"

export const useSortedPosts = (posts, sort) => {
	const sortedPosts = useMemo(() => {
		// console.log('sortedPosts DONE!')
		if (sort) {
			return [...posts].sort((a, b) => a[sort].localeCompare(b[sort], undefined, { 'numeric': true }))
		}
		return posts;
	}, [sort, posts])

	return sortedPosts;
}

export const usePosts = (posts, sort, query) => {
	const sortedPosts = useSortedPosts(posts, sort);

	const sortedAndSearchedPosts = useMemo(() => {
		// console.log(sortedPosts);
		return  sortedPosts.filter(post => post.subtitle.toLowerCase().includes(query.toLocaleLowerCase()))
	}, [query, sortedPosts])

	return sortedAndSearchedPosts;
}