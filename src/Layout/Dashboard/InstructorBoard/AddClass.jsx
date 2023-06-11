import { useForm } from 'react-hook-form';
import useAuth from '../../../Hooks/useAuth';
// import Swal from "sweetalert2";
// import useAxiosSecure from '../../../Hooks/useAxiosSecure';

// const img_hosting_token = import.meta.env.VITE_Image_Upload_token;

const AddClass = () => {
  const { user } = useAuth();
  // const [axiosSecure] = useAxiosSecure();
  const { register, handleSubmit, formState: { errors } } = useForm();
  // const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`

  const onSubmit = data => {
    
    console.log(data)

    //     const formData = new FormData();
    //     formData.append('image', data.image[0])

    //     fetch(img_hosting_url, {
    //         method: 'POST',
    //         body: formData
    //     })
    //     .then(res => res.json())
    //     .then(imgResponse => {
    //         if(imgResponse.success){
    //             const imgURL = imgResponse.data.display_url;
    //             const {name, price, category, recipe} = data;
    //             const newItem = {name, price: parseFloat(price), category, recipe, image:imgURL}
    //             console.log(newItem)
    //             axiosSecure.post('/menu', newItem)
    //             .then(data => {
    //                 console.log('after posting new menu item', data.data)
    //                 if(data.data.insertedId){
    //                     reset();
    //                     Swal.fire({
    //                         position: 'top-end',
    //                         icon: 'success',
    //                         title: 'Item added successfully',
    //                         showConfirmButton: false,
    //                         timer: 1500
    //                       })
    //                 }
    //             })
    //         }
    //     })

  };

  console.log(errors)
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
        <div className="form-control w-full my-4">
          <label className="label">
            <span className="label-text">Class Image</span>
          </label>
          <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full bg-green-300  " />
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


        <input className="btn btn-sm mt-4" type="submit" value="Add Item" />
      </form>
    </div>

  );
};

export default AddClass;