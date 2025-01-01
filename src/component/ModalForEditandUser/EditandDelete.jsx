import React, { useState } from 'react';

const EditandDelete = ({ contactData, setShowModal, updateContact,deleteContact }) => {
    const [formData, setFormData] = useState({ ...contactData });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSave = () => {
        console.log("Saved data", formData);
        updateContact(formData); // Update contact with the edited data
        setShowModal(false); // Close the modal
    };

    const handleClose = () => {
        setShowModal(false); // Close the modal
    };
    const handleDelete = () => {
        if (window.confirm(`Are you sure you want to delete ${contactData.name}?`)) {
            deleteContact(contactData.id); // Delete contact by its ID
            setShowModal(false); // Close the modal
        }
    };


    return (
        <div className="modal fade show" id="editModal" tabIndex="-1" aria-labelledby="exampleModalLabel" style={{ display: 'block', animation: 'fadeIn 1s ease-in-out' }} aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content" style={{ backgroundColor: '#f9f9f9', color: '#333' }}>
                    <div className="modal-header" style={{ borderBottom: '1px solid #ccc' }}>
                        <h5 className="modal-title" id="exampleModalLabel" style={{ color: '#007bff' }}>Edit Contact</h5>
                        <button type="button" className="btn-close" onClick={handleClose} aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="contactName" className="form-label" style={{display:"flex", fontWeight:"bold"}}>Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="contactName"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    style={{ backgroundColor: '#ffffff', borderColor: '#ccc' }}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="contactEmail" className="form-label" style={{display:"flex", fontWeight:"bold"}}>Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="contactEmail"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    style={{ backgroundColor: '#ffffff', borderColor: '#ccc' }}
                                />
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn  btn-outline-success" onClick={handleSave}>Save</button>
                        <button type="button" class="btn btn-outline-danger"  onClick={handleDelete}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditandDelete;
