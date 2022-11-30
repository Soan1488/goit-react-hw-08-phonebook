import PropTypes from 'prop-types';
import css from './ContactList.module.css';

export default function ContactList({ contacts }) {
  const lengthOfArr = contacts.length;
  //   return (
  //     {lengthOfArr  && (<ul>
  //         {contacts.map(item => {
  //           const { id, name, number } = item;
  //           return (
  //             <li key={id}>
  //               {name}: {number}
  //             </li>
  //           );
  //         })}
  //       </ul>)}
  //     )
}
