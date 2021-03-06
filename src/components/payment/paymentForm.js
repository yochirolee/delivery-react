import React from "react";
import { useForm } from "react-hook-form";

export default function PaymentForm({ HandleSubmit, loading, user }) {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    HandleSubmit(data);
  };

  return (
    <form
      class="w-full lg:w-1/2 lg:ml-20 lg:mt-0 mt-10 bg-white rounded p-8"
      form
      id="form-payment"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="bg-white mx-4 rounded-full">
        <h3 className="pb-2 mb-4 border-b ">Por Favor Rellene sus Datos</h3>
        <img
          className=" rounded-full mb-4 relative w-20 h-20 mx-auto cursor-pointer "
          src={user.photoURL}
          alt="Avatar"
        />
      </div>

      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full md:w-1/4 px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-state"
          >
            Municipio
          </label>
          <div class="relative ">
            <select
              className="block appearance-none w-full bg-gray-100 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-state"
              name="region"
              ref={register({ required: true })}
            >
              <option>Playa</option>
              <option>Vedado</option>
              <option>Cerro</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                class="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-first-name"
          >
            Nombre
          </label>
          <input
            name="name"
            value={user.displayName ? user.displayName : null}
            ref={register({ required: true })}
            className="appearance-none block w-full bg-gray-100 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            aria-describedby="nameValidation"
          ></input>
          {errors.name && (
            <small className="text-red-400">This Field is Required.</small>
          )}
        </div>
        <div class="w-full md:w-1/4 px-1">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-last-name"
          >
            Telefono
          </label>
          <input
            name="phone"
            value={user.phoneNumber ? user.phoneNumber : null}
            ref={register({ required: true })}
            className="appearance-none block w-full bg-gray-100 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            aria-describedby="nameValidation"
          ></input>
          {errors.name && (
            <small className="text-red-400">This Field is Required.</small>
          )}
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-password"
          >
            Direccion de Envio
          </label>
          <input
            name="address"
            ref={register({ required: true })}
            className="appearance-none block w-full bg-gray-100 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            aria-describedby="nameValidation"
          ></input>
          {errors.name && (
            <small className="text-red-400">This Field is Required.</small>
          )}
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-2">
        {loading ? (
          <div className="text-white w-64 mx-auto bg-orange-600 rounded p-2">
            <p>Sending...</p>
          </div>
        ) : (
          <button
            type="submit"
            className="text-white w-64 mx-auto bg-orange-600 rounded p-2"
          >
            Ordenar
          </button>
        )}
      </div>
    </form>
  );
}
