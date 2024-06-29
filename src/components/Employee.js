import EditEmployee from "./EditEmployee";

function Employee(props) {
  return (
    <div className="employee-container">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
        <img
          src={props.imageSrc}
          alt={props.name}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <p className="mt-1 text-sm text-gray-500">{props.name}</p>
        </div>
        <p className="text-sm font-medium text-gray-900">{props.role}</p>
      </div>
      <EditEmployee id={props.id} name={props.name} role={props.role} updateEmployee={props.updateEmployee}/>
    </div>
  );
}

export default Employee;
