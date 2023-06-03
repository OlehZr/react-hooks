import { useState } from 'react';

const contacts_list = [{
    firstName: "Барней",
    lastName: "Стинсовський",
    phone: "+380956319521",
    gender: "male"
},
{
    firstName: "Робін",
    lastName: "Щербатська",
    phone: "+380931460123",
    gender: "female"
},
{
    firstName: "Анонімний",
    lastName: "Анонімус",
    phone: "+380666666666"
},
{
    firstName: "Лілія",
    lastName: "Олдровна",
    phone: "+380504691254",
    gender: "female"
},
{
    firstName: "Маршен",
    lastName: "Еріксонян",
    phone: "+380739432123",
    gender: "male"
},
{
    firstName: "Теодор",
    lastName: "Мотсбес",
    phone: "+380956319521",
    gender: "male"
}];

function Contact(props){    
    return (
    <div className='contacts'>
        <div className='name'>
        <p>{props.firstName}</p>
        <p>{props.lastName}</p>
        </div>
        <p>{props.phone}</p>
    </div>
    )
};

function Contacts(){
    const [contacts, setContacts] = useState(contacts_list);
    const [search, setSearch] = useState("");
    
    function handleSearchChange(event){    
        setSearch(event.target.value)
        if(event.target.value === ""){
            setContacts(contacts_list)
        } else { 
            setContacts(contacts_list.filter(el => {
                return el.lastName.toLowerCase().includes(search.toLowerCase()) ||
                        el.firstName.toLowerCase().includes(search.toLowerCase()) ||
                        el.phone.includes(search)
                }))
            }
        }

    contacts.forEach((el, i) => {
        <Contact firstName={el.firstName} lastName={el.lastName} phone={el.phone} key = {i}/>
    })
    
    return (
    <div>
        <input className='search' placeholder='Type...' value={search} onChange={(event) => handleSearchChange(event)}/>
        <div>{contacts.map(el => <Contact {...el}/>)}</div>
    </div> 
    )
};

export default Contacts;