import React, {Component} from "react";
import Like from "./common/Like";
import TableHeader from "./common/tableHeader";

class MoviesTable extends Component {

    columns = [
        {column: 'title', label: 'Title'},
        {column: 'genre.name', label: 'Genre'},
        {column: 'numberInStock', label: 'Stock'},
        {column: 'dailyRentalRate', label: 'Rate'},
        {key: 'like'}, //Empty object passed for for "Like" Column
        {key: 'delete'} //Empty object passed for Delete button Column
    ];


    render() {
        const {movies, onDelete, onLike, onSort, sortColumn} = this.props;

        return (
            <table className="table">
                <TableHeader columns={this.columns} sortColumn={sortColumn} onSort={onSort}/>
                <tbody>
                {movies.map(movie => (
                    <tr key={movie._id}>
                        <td>{movie.title}</td>
                        <td>{movie.genre.name}</td>
                        <td>{movie.numberInStock}</td>
                        <td>{movie.dailyRentalRate}</td>
                        <td>
                            <Like liked={movie.liked} onClick={() => onLike(movie)}/>
                        </td>
                        <td>
                            <button onClick={() => onDelete(movie)}
                                    className="btn btn-danger btn-sm">Delete
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        );
    }
}

export default MoviesTable;
