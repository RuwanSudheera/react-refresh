import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

function AddEmployee(props) {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [imageSrc, setImageSrc] = useState('');

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" className='block bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded' onClick={handleShow}>
        + Add user
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form id='editModel' onSubmit={(e) => {
                e.preventDefault();
                props.addEmployee(name, role, imageSrc);
                handleClose();
                setName('');
                setRole('');
                setImageSrc('');
            }}>
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-4">
                        <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">Name</label>
                        <div className="mt-2">
                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                            <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">{name}</span>
                            <input type="text" className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="name" value={name} onChange={(e) => setName(e.target.value)}></input>
                            </div>
                        </div>
                    </div>
                    <div className="sm:col-span-4">
                        <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">Role</label>
                        <div className="mt-2">
                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                            <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">{role}</span>
                            <input type="text" className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="role" value={role} onChange={(e) => setRole(e.target.value)}></input>
                            </div>
                        </div>
                    </div>
                    <div className="sm:col-span-4">
                        <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">Image</label>
                        <div className="mt-2">
                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                            <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">{imageSrc}</span>
                            <input type="text" className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="image" value={imageSrc} onChange={(e) => setImageSrc(e.target.value)}></input>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' form='editModel'>+ Add Employee</button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddEmployee;
