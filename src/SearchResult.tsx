/**
 * NOTE: This component intentionally contains an XSS vulnerability
 * for GitHub Advanced Security code scanning demonstration.
 */
function SearchResult() {
	const params = new URLSearchParams(window.location.search);
	const query = params.get("q") ?? "";

	// XSS vulnerability: user input rendered as raw HTML
	return (
		<div>
			<h2>Search Results</h2>
			<div dangerouslySetInnerHTML={{ __html: `You searched for: ${query}` }} />
		</div>
	);
}

export default SearchResult;
