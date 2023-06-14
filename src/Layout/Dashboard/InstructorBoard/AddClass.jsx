import { useForm } from 'react-hook-form';
import useAuth from '../../../Hooks/useAuth';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';


const AddClass = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user } = useAuth();
  const { register, handleSubmit, reset,formState: { errors } } = useForm();

  const onSubmit = data => {

    console.log(data)
  
    const { name, price, email, seats,students, instructor, photoURL } = data;
    const newItem = { name, price: parseFloat(price), photoURL, instructor,students, email, seats: parseFloat(seats), status: 'pending' }
    console.log(newItem)
    axiosSecure.post('/classes', newItem)
      .then(data => {
        console.log('after posting new  item', data.data)
        if (data.data.insertedId) {
          reset();
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Item added successfully',
            showConfirmButton: false,
            timer: 1500
          })
        }
      })
  }

return (

  <div className="w-full px-10">
    <h2 className='text-2xl text-emerald-600 font-bold text-center p-5'>Add A Class</h2>

    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-control w-full mb-4">
        <label className="label">
          <span className="label-text font-semibold">Class Name</span>
        </label>
        <input type="text" placeholder="Class Name"
          {...register("name", { required: true, maxLength: 120 })}
          className="input input-bordered w-full " />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Class Image</span>
        </label>
        <input type="text"  {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered text-red-600"/>
      </div>
      <div className="form-control w-full mb-4">
        <label className="label">
          <span className="label-text font-semibold">Instructor Name</span>
        </label>
        <input type="text" placeholder="Instructor Name"
          {...register("instructor", { required: true, maxLength: 120 })}
          value={user.displayName}
          readOnly
          className="input input-bordered w-full " />
      </div>
      <div className="form-control w-full mb-4">
        <label className="label">
          <span className="label-text font-semibold">Instructor Email</span>

        </label>
        <input type="email" placeholder="email"
          {...register("email", { required: true, maxLength: 120 })}
          value={user.email}
          readOnly
          className="input input-bordered w-full " />
      </div>


      <div className="form-control w-full ml-4">
        <label className="label">
          <span className="label-text font-semibold">Price</span>
        </label>
        <input type="number" {...register("price", { required: true })} placeholder="price" className="input input-bordered w-full " />
      </div>

      <div className="form-control w-full ml-4">
        <label className="label">
          <span className="label-text font-semibold">Avaiable Seats</span>
        </label>
        <input type="number" {...register("seats", { required: true })} placeholder="seats" className="input input-bordered w-full " />
      </div>
      <div className="form-control w-full ml-4">
        <label className="label">
          <span className="label-text font-semibold">number of students</span>
        </label>
        <input type="number" {...register("students", { required: true })} placeholder="students" className="input input-bordered w-full " />
      </div>


      <input className="btn bg-green-600 px-4 py-2 text-white" type="submit" value="Add Item" />
    </form>
  </div>

);
};

export default AddClass;