import React, { useState } from 'react';
import EditandDelete from './ModalForEditandUser/EditandDelete';

const ContactList = ({ contacts, updateContact,deleteContact }) => {
    const [showModal, setShowModal] = useState(false);
    const [contactData, setContactData] = useState(null);

    const handleUserClick = (contact) => {
        setShowModal(true);
        setContactData(contact);
    }

    return (
        <>
            <div className="container">
                <h5 className="my-2 text-start">Contacts</h5>
                <table className="table table-bordered table-light table-hover">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contacts.map(contact => (
                            <tr
                                key={contact.id}
                                onClick={() => handleUserClick(contact)}
                                style={{ cursor: "pointer" }}
                            >
                                <td>{contact.id}</td>
                                <td>{contact.name}</td>
                                <td>{contact.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {showModal && <EditandDelete
                contactData={contactData}
                setShowModal={setShowModal}
                updateContact={updateContact}
                deleteContact={deleteContact}
            />}
        </>
    );
};

export default ContactList;
