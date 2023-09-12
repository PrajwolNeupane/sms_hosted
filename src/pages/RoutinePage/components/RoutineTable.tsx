import React from "react";
import { useState } from "react";
import RoutineForm from "./RoutineForm";
import CustomButton from "../../../components/Button/CustomButton";

function RoutineTable() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="p-5  ">
      <table className="border-collapse  border border-slate-500  ">
        <thead className="text-xs text-white uppercase bg-primary">
          <tr className="">
            <th className=" px-10 py-4"></th>
            <th className="border border-slate-600 px-10 py-4">Sunday</th>
            <th className="border border-slate-600 px-10 py-4">Monday</th>
            <th className="border border-slate-600 px-10 py-4">Tuesday</th>
            <th className="border border-slate-600 px-10 py-4">Wednesday</th>
            <th className="border border-slate-600 px-10 py-4">Thursday</th>
            <th className="border border-slate-600 px-10 py-4">Friday</th>
            <th className="border border-slate-600 px-10 py-4">Saturday</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b text-primary hover:border-separate ">
            <td className="border border-slate-700 py-8 px-10 ">06:00 am</td>
            <td
              onClick={() => setShowModal(true)}
              className="border border-slate-700 py-8 px-10 "
            ></td>
            <td
              onClick={() => setShowModal(true)}
              className="border border-slate-700 py-8 px-10 "
            ></td>
            <td
              onClick={() => setShowModal(true)}
              className="border border-slate-700 py-8 px-10"
            ></td>
            <td
              onClick={() => setShowModal(true)}
              className="border border-slate-700 py-8 px-10 "
            ></td>
            <td
              onClick={() => setShowModal(true)}
              className="border border-slate-700 py-8 px-10"
            ></td>
            <td
              onClick={() => setShowModal(true)}
              className="border border-slate-700 py-8 px-10 "
            ></td>
            <td
              onClick={() => setShowModal(true)}
              className="border border-slate-700 py-8 px-10 "
            ></td>
          </tr>
          <tr>
            <td className="border border-slate-700 py-8 px-10 ">07:00 am</td>
            <td
              onClick={() => setShowModal(true)}
              className="border border-slate-700 py-8 px-10"
            ></td>
            <td
              onClick={() => setShowModal(true)}
              className="border border-slate-700 py-8 px-10 "
            ></td>
            <td
              onClick={() => setShowModal(true)}
              className="border border-slate-700 py-8 px-10"
            ></td>
            <td
              onClick={() => setShowModal(true)}
              className="border border-slate-700 py-8 px-10 "
            ></td>
            <td
              onClick={() => setShowModal(true)}
              className="border border-slate-700 py-8 px-10"
            ></td>
            <td
              onClick={() => setShowModal(true)}
              className="border border-slate-700 py-8 px-10 "
            ></td>
            <td
              onClick={() => setShowModal(true)}
              className="border border-slate-700 py-8 px-10 "
            ></td>
          </tr>
          <tr>
            <td className="border border-slate-700 py-8 px-10 ">08:00 am</td>
            <td
              onClick={() => setShowModal(true)}
              className="border border-slate-700 py-8 px-10"
            ></td>
            <td
              onClick={() => setShowModal(true)}
              className="border border-slate-700 py-8 px-10 "
            ></td>
            <td
              onClick={() => setShowModal(true)}
              className="border border-slate-700 py-8 px-10"
            ></td>
            <td
              onClick={() => setShowModal(true)}
              className="border border-slate-700 py-8 px-10 "
            ></td>
            <td
              onClick={() => setShowModal(true)}
              className="border border-slate-700 py-8 px-10"
            ></td>
            <td
              onClick={() => setShowModal(true)}
              className="border border-slate-700 py-8 px-10 "
            ></td>
            <td
              onClick={() => setShowModal(true)}
              className="border border-slate-700 py-8 px-10 "
            ></td>
          </tr>
          <tr>
            <td className="border border-slate-700 py-8 px-10 ">09:00 am</td>
            <td
              onClick={() => setShowModal(true)}
              className="border border-slate-700 py-8 px-10"
            ></td>
            <td
              onClick={() => setShowModal(true)}
              className="border border-slate-700 py-8 px-10 "
            ></td>
            <td
              onClick={() => setShowModal(true)}
              className="border border-slate-700 py-8 px-10"
            ></td>
            <td
              onClick={() => setShowModal(true)}
              className="border border-slate-700 py-8 px-10 "
            ></td>
            <td
              onClick={() => setShowModal(true)}
              className="border border-slate-700 py-8 px-10"
            ></td>
            <td
              onClick={() => setShowModal(true)}
              className="border border-slate-700 py-8 px-10 "
            ></td>
            <td
              onClick={() => setShowModal(true)}
              className="border border-slate-700 py-8 px-10 "
            ></td>
          </tr>
          <tr>
            <td className="border border-slate-700 py-8 px-10 ">10:00 am</td>
            <td
              onClick={() => setShowModal(true)}
              className="border border-slate-700 py-8 px-10"
            ></td>
            <td
              onClick={() => setShowModal(true)}
              className="border border-slate-700 py-8 px-10 "
            ></td>
            <td
              onClick={() => setShowModal(true)}
              className="border border-slate-700 py-8 px-10"
            ></td>
            <td
              onClick={() => setShowModal(true)}
              className="border border-slate-700 py-8 px-10 "
            ></td>
            <td
              onClick={() => setShowModal(true)}
              className="border border-slate-700 py-8 px-10"
            ></td>
            <td
              onClick={() => setShowModal(true)}
              className="border border-slate-700 py-8 px-10 "
            ></td>
            <td
              onClick={() => setShowModal(true)}
              className="border border-slate-700 py-8 px-10 "
            ></td>
          </tr>
          <tr>
            <td className="border border-slate-700 py-8 px-10 ">11:00 am</td>
            <td
              onClick={() => setShowModal(true)}
              className="border border-slate-700 py-8 px-10"
            ></td>
            <td
              onClick={() => setShowModal(true)}
              className="border border-slate-700 py-8 px-10 "
            ></td>
            <td
              onClick={() => setShowModal(true)}
              className="border border-slate-700 py-8 px-10"
            ></td>
            <td
              onClick={() => setShowModal(true)}
              className="border border-slate-700 py-8 px-10 "
            ></td>
            <td
              onClick={() => setShowModal(true)}
              className="border border-slate-700 py-8 px-10"
            ></td>
            <td
              onClick={() => setShowModal(true)}
              className="border border-slate-700 py-8 px-10 "
            ></td>
            <td
              onClick={() => setShowModal(true)}
              className="border border-slate-700 py-8 px-10 "
            ></td>
          </tr>
          <tr>
            <td className="border border-slate-700 py-8 px-10 ">12:00 pm</td>
            <td
              onClick={() => setShowModal(true)}
              className="border border-slate-700 py-8 px-10"
            ></td>
            <td
              onClick={() => setShowModal(true)}
              className="border border-slate-700 py-8 px-10 "
            ></td>
            <td
              onClick={() => setShowModal(true)}
              className="border border-slate-700 py-8 px-10"
            ></td>
            <td
              onClick={() => setShowModal(true)}
              className="border border-slate-700 py-8 px-10 "
            ></td>
            <td
              onClick={() => setShowModal(true)}
              className="border border-slate-700 py-8 px-10"
            ></td>
            <td
              onClick={() => setShowModal(true)}
              className="border border-slate-700 py-8 px-10 "
            ></td>
            <td
              onClick={() => setShowModal(true)}
              className="border border-slate-700 py-8 px-10 "
            ></td>
          </tr>
          <tr>
            <td className="border border-slate-700 py-8 px-10 ">01:00 pm</td>
            <td
              onClick={() => setShowModal(true)}
              className="border border-slate-700 py-8 px-10"
            ></td>
            <td
              onClick={() => setShowModal(true)}
              className="border border-slate-700 py-8 px-10 "
            ></td>
            <td
              onClick={() => setShowModal(true)}
              className="border border-slate-700 py-8 px-10"
            ></td>
            <td
              onClick={() => setShowModal(true)}
              className="border border-slate-700 py-8 px-10 "
            ></td>
            <td
              onClick={() => setShowModal(true)}
              className="border border-slate-700 py-8 px-10"
            ></td>
            <td
              onClick={() => setShowModal(true)}
              className="border border-slate-700 py-8 px-10 "
            ></td>
            <td
              onClick={() => setShowModal(true)}
              className="border border-slate-700 py-8 px-10 "
            ></td>
          </tr>
          <tr>
            <td className="border border-slate-700 py-8 px-10 ">02:00 pm</td>
            <td
              onClick={() => setShowModal(true)}
              className="border border-slate-700 py-8 px-10"
            ></td>
            <td
              onClick={() => setShowModal(true)}
              className="border border-slate-700 py-8 px-10 "
            ></td>
            <td
              onClick={() => setShowModal(true)}
              className="border border-slate-700 py-8 px-10"
            ></td>
            <td
              onClick={() => setShowModal(true)}
              className="border border-slate-700 py-8 px-10 "
            ></td>
            <td
              onClick={() => setShowModal(true)}
              className="border border-slate-700 py-8 px-10"
            ></td>
            <td
              onClick={() => setShowModal(true)}
              className="border border-slate-700 py-8 px-10 "
            ></td>
            <td
              onClick={() => setShowModal(true)}
              className="border border-slate-700 py-8 px-10 "
            ></td>
          </tr>
          <tr>
            <td className="border border-slate-700 py-8 px-10 ">03:00 pm</td>
            <td
              onClick={() => setShowModal(true)}
              className="border border-slate-700 py-8 px-10"
            ></td>
            <td
              onClick={() => setShowModal(true)}
              className="border border-slate-700 py-8 px-10 "
            ></td>
            <td
              onClick={() => setShowModal(true)}
              className="border border-slate-700 py-8 px-10"
            ></td>
            <td
              onClick={() => setShowModal(true)}
              className="border border-slate-700 py-8 px-10 "
            ></td>
            <td
              onClick={() => setShowModal(true)}
              className="border border-slate-700 py-8 px-10"
            ></td>
            <td
              onClick={() => setShowModal(true)}
              className="border border-slate-700 py-8 px-10 "
            ></td>
            <td
              onClick={() => setShowModal(true)}
              className="border border-slate-700 py-8 px-10 "
            ></td>
          </tr>
          <tr>
            <td className="border border-slate-700 py-8 px-10 ">04:00 pm</td>
            <td
              onClick={() => setShowModal(true)}
              className="border border-slate-700 py-8 px-10"
            ></td>
            <td
              onClick={() => setShowModal(true)}
              className="border border-slate-700 py-8 px-10 "
            ></td>
            <td
              onClick={() => setShowModal(true)}
              className="border border-slate-700 py-8 px-10"
            ></td>
            <td
              onClick={() => setShowModal(true)}
              className="border border-slate-700 py-8 px-10 "
            ></td>
            <td
              onClick={() => setShowModal(true)}
              className="border border-slate-700 py-8 px-10"
            ></td>
            <td
              onClick={() => setShowModal(true)}
              className="border border-slate-700 py-8 px-10 "
            ></td>
            <td
              onClick={() => setShowModal(true)}
              className="border border-slate-700 py-8 px-10 "
            ></td>
          </tr>
          <tr>
            <td className="border border-slate-700 py-8 px-10 ">05:00 pm</td>
            <td
              onClick={() => setShowModal(true)}
              className="border border-slate-700 py-8 px-10"
            ></td>
            <td
              onClick={() => setShowModal(true)}
              className="border border-slate-700 py-8 px-10 "
            ></td>
            <td
              onClick={() => setShowModal(true)}
              className="border border-slate-700 py-8 px-10"
            ></td>
            <td
              onClick={() => setShowModal(true)}
              className="border border-slate-700 py-8 px-10 "
            ></td>
            <td
              onClick={() => setShowModal(true)}
              className="border border-slate-700 py-8 px-10"
            ></td>
            <td
              onClick={() => setShowModal(true)}
              className="border border-slate-700 py-8 px-10 "
            ></td>
            <td
              onClick={() => setShowModal(true)}
              className="border border-slate-700 py-8 px-10 "
            ></td>
          </tr>
          <tr>
            <td className="border border-slate-700 py-8 px-10 ">06:00 pm</td>
            <td
              onClick={() => setShowModal(true)}
              className="border border-slate-700 py-8 px-10"
            ></td>
            <td
              onClick={() => setShowModal(true)}
              className="border border-slate-700 py-8 px-10 "
            ></td>
            <td
              onClick={() => setShowModal(true)}
              className="border border-slate-700 py-8 px-10"
            ></td>
            <td
              onClick={() => setShowModal(true)}
              className="border border-slate-700 py-8 px-10 "
            ></td>
            <td
              onClick={() => setShowModal(true)}
              className="border border-slate-700 py-8 px-10"
            ></td>
            <td
              onClick={() => setShowModal(true)}
              className="border border-slate-700 py-8 px-10 "
            ></td>
            <td
              onClick={() => setShowModal(true)}
              className="border border-slate-700 py-8 px-10 "
            ></td>
          </tr>
        </tbody>
      </table>

      {/* code for the modal to add routine */}
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="border-1 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none max-w-3xl">
              <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                <h5 className="text-3xl font-semibold text-primary">
                  Add Routine
                </h5>
              </div>
              {/*body*/}
              <div className="relative p-6 flex-auto">
                <RoutineForm />
              </div>
              {/*footer*/}
              <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b gap-5">
                <CustomButton
                  text={"close"}
                  onClick={() => setShowModal(false)}
                  color={"bg-red-500"}
                />
                <CustomButton
                  text={"Save Changes"}
                  onClick={() => setShowModal(false)}
                />
              </div>
            </div>
          </div>

          {/* create the dark background while opening model */}
          <div className="opacity-25 fixed inset-0 z-40 bg-black"> </div>
        </>
      ) : null}
    </div>
  );
}

export default RoutineTable;
