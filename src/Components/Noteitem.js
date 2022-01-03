import React, { useContext } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import noteContext from '../context/notes/noteContext';

const Noteitem = (props) => {
    const context = useContext(noteContext);
    const { deleteNote } = context;
    const { note } = props;
    return (
        <div className="col-md-3">
            <div className="card my-3">
                <div className="card-body">
                    <div className="d-flex">
                        <h5 className="card-title">{note.title}</h5>
                        <DeleteIcon className="mx-2" style={{ cursor: "pointer" }} onClick={() => { deleteNote(note._id) }} />
                        <EditIcon className="mx-2" style={{ cursor: "pointer" }} />
                    </div>
                    <p className="card-text">{note.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Noteitem