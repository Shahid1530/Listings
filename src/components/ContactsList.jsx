import  { useState, useEffect } from "react";
import axios from "axios";

const ContactsList = () => {
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch contact data from the API
        const fetchContacts = async () => {
            try {
                const response = await axios.get("http://localhost:5000/api/contacts");
                setContacts(response.data); // Set contacts in state
                setLoading(false);
            } catch (err) {
                setError("Error fetching contacts");
                setLoading(false);
            }
        };

        fetchContacts();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p style={{ color: "red" }}>{error}</p>;

    return (
        <div className="container5">
            <h2>Contact List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Subject</th>
                        <th>Message</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map((contact) => (
                        <tr key={contact._id}>
                            <td>{contact.name}</td>
                            <td>{contact.email}</td>
                            <td>{contact.phone || "N/A"}</td>
                            <td>{contact.subject || "N/A"}</td>
                            <td>{contact.message || "No message"}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ContactsList;
