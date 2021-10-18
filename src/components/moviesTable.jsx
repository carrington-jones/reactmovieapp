import React, {Component} from "react";
import Like from "./common/Like";
import TableHeader from "./common/tableHeader";
import TableBody from "./common/tableBody";


class MoviesTable extends Component {

    columns = [
        {column: 'title', label: 'Title'},
        {column: 'genre.name', label: 'Genre'},
        {column: 'numberInStock', label: 'Stock'},
        {column: 'dailyRentalRate', label: 'Rate'},
        {key: 'like', content: movie => <Like liked={movie.liked} onClick={() => this.props.onLike(movie)}/>}, //Empty object passed for for "Like" Column
        {key: 'delete', content: movie => <button onClick={() => this.props.onDelete(movie)} className="btn btn-danger btn-sm">Delete</button>} //Empty object passed for Delete button Column
    ];


    render() {
        const {movies, onSort, sortColumn} = this.props;

        return (
            <table className="table">
                <TableHeader columns={this.columns} sortColumn={sortColumn} onSort={onSort}/>
                <TableBody columns={this.columns} data={movies} />
            </table>
        );
    }
}

export default MoviesTable;
