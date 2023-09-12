import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import CustomBreadCrumb from "../../../components/Breadcrumb/CustomBreadcrumb";

function CalanderTable() {
  return (
    <div className="flex flex-col w-full px-10">
      <CustomBreadCrumb
        title="Calander"
        list={[{ name: "", link: " " }]}
        className="py-8"
      />
      <div className="flex w-full pb-5">
        <div className="flex flex-col flex-grow h-full w-full bg-white rounded-md p-5">
          <Fullcalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView={"dayGridMonth"}
            headerToolbar={{
              start: "prev,next today",
              center: "title",
              end: "dayGridMonth,timeGridWeek,timeGridDay",
            }}
            weekends={true}
            height={"90vh"}
            events={[
              { title: "event 1", date: "2023-09-04" },
              { title: "event 2", date: "2023-09-07" },
            ]}
          />
        </div>
      </div>
    </div>
  );
}

export default CalanderTable;
