import options from "../../css/options.css";
const temp = () => {
  return (
    <div>
      <TableCell className="tableCell">
        <Link to={`/admin/achievemnts/${row._id}`} id="edit_label">
          <span
            className="absolute z-50 text-sm font-light text-gray-50 bg-blue-600 rounded-md px-1.5 py-0.5"
            id="edit"
          >
            Edit
          </span>
          <BiEdit className="w-6 h-6 text-blue-600" />
        </Link>
      </TableCell>
      <TableCell className="tableCell">
        <Link
          to="/admin/achievements"
          onClick={() => deleteItem(row._id)}
          id="delete_label"
        >
          <span
            className="absolute z-50 text-sm font-light text-gray-50 bg-red-600 rounded-md px-1.5 py-0.5"
            id="delete"
          >
            Delete
          </span>
          <MdDelete className="w-6 h-6 text-red-600" />
        </Link>
      </TableCell>
      <Link to={`/admin/events/show-participants/${row._id}`} id="view_label">
        <span
          className="absolute z-50 text-sm font-light text-gray-50 bg-green-600 rounded-md px-1.5 py-0.5"
          id="view"
        >
          View
        </span>
        <MdViewQuilt className="w-6 h-6 text-green-600" />
      </Link>
    </div>
  );
};
