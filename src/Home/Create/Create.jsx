import axios from 'axios';
import { useForm } from 'react-hook-form';


const Create = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

      const onSubmit = data => {


        console.log(data);

        // createTodo = {
        //     title : data.Title,
        //     descriptions: data.Descriptions,
        //     Deadline : data.Deadline
        // }

        axios.post('http://localhost:5000/createtodo', data)

      }
    

    return (
        <div className="max-w-md mx-auto pt-8 pb-8">

        <form
          className="bg-[#31304D] shadow-md rounded px-8 pt-6 pb-8 mb-4 sm:max-w-lg sm:mx-auto"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-[#F0ECE5] text-sm  mb-2"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Title Here"
              {...register('Title', { required: true })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-[#F0ECE5] leading-tight focus:outline-none focus:shadow-outline"
            />
              {errors.Title && <p className='text-red-700 text-center mt-2'>*Title required.</p>}

          </div>
      
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-[#F0ECE5] text-sm  mb-2"
            >
              Descriptions
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Enter your message"
              {...register('Descriptions', { required: true })}
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline h-32 resize-none"
            ></textarea>
              {errors.Descriptions &&<p className='text-red-700 text-center mt-2'>*Descriptions required.</p>}
          </div>

          <div className="mb-6">
            <label
              htmlFor="Dedline"
              className="block text-[#F0ECE5] text-sm  mb-2"
            >
              Deadline
            </label>
            <input
              type="date"
              id="email"
              name="email"
              placeholder="Enter your email"
              {...register('Deadline', { required: true })}
              
             
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            />
              {errors.Deadline && <p className='text-red-700 text-center mt-2'>*Deadline required.</p>}
          </div>

          <div className="mb-4">
          <label
            htmlFor="priority"
            className="block text-[#F0ECE5] text-sm  mb-2"
          >
            Priority
          </label>
          <select
            id="priority"
            name="Priority"
            {...register('Priority')}
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option className='bg-info' value="Low">Low</option>
            <option className='bg-warning' value="Moderate">Moderate</option>
            <option className='bg-error' value="High">High</option>
          </select>
        </div>

          <div className="flex items-center justify-center sm:justify-end">
            <button
              type="submit"
              className="bg-[#B6BBC4] hover:bg-[#F0ECE5] text-black  py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    );
};

export default Create;