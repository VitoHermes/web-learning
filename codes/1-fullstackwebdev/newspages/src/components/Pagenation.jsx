export default function Pagenation({ postsPerPage, setPostsPerPage, totalPosts, paginate, currentPage }) {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <nav>
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li key={number} className="page-item">
                        <a
                            onClick={() => paginate(number)}
                            href="#"
                            className={`page-link ${currentPage === number ? 'active' : ''
                                }`}
                        >
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
            <select onChange={(e) => setPostsPerPage(Number(e.target.value))} value={postsPerPage}>
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={15}>15</option>
            </select>
        </nav>
    )
} 