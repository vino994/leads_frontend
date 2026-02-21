import api from "../services/api";
import {
  PhoneIcon,
  ChatBubbleLeftRightIcon
} from "@heroicons/react/24/solid";

function LeadsTable({ leads, requestId }) {
  if (!leads || leads.length === 0) return null;

  const handleDownload = async () => {
    try {
      const response = await api.get(
        `/leads/download/excel/${requestId}`,
        { responseType: "blob" }
      );

      const url = window.URL.createObjectURL(
        new Blob([response.data])
      );

      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "leads.xlsx");
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      alert("Error downloading file");
    }
  };

  // Clean phone number for links
  const formatPhone = (phone) => {
    if (!phone) return "";
    return phone.replace(/\D/g, "");
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl mt-8 overflow-hidden">

      {/* Header */}
      <div className="flex justify-between items-center px-6 py-4 border-b dark:border-gray-700">
        <h2 className="text-lg font-semibold">
          Generated Leads
        </h2>

        <button
          onClick={handleDownload}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm transition"
        >
          Download Excel
        </button>
      </div>

      {/* Table Wrapper (Mobile Scroll) */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 dark:bg-gray-700 text-gray-600 dark:text-gray-200 uppercase text-xs">
            <tr>
              <th className="px-6 py-3 text-left">Name</th>
              <th className="px-6 py-3 text-left">Phone</th>
              <th className="px-6 py-3 text-left">Address</th>
              <th className="px-6 py-3 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {leads.map((lead, index) => {
              const cleanPhone = formatPhone(lead.Phone);

              return (
                <tr
                  key={index}
                  className="border-t dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition"
                >
                  <td className="px-6 py-4 font-medium">
                    {lead.Name}
                  </td>

                  <td className="px-6 py-4">
                    {lead.Phone || "N/A"}
                  </td>

                  <td className="px-6 py-4">
                    {lead.Address}
                  </td>

                  {/* Action Buttons */}
                  <td className="px-6 py-4">
                    {cleanPhone ? (
                      <div className="flex items-center justify-center gap-3">

                        {/* Call */}
                        <a
                          href={`tel:${cleanPhone}`}
                          className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full transition"
                          title="Call"
                        >
                          <PhoneIcon className="w-4 h-4" />
                        </a>

                        {/* WhatsApp */}
                        <a
                          href={`https://wa.me/${cleanPhone}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-green-600 hover:bg-green-700 text-white p-2 rounded-full transition"
                          title="WhatsApp"
                        >
                          <ChatBubbleLeftRightIcon className="w-4 h-4" />
                        </a>

                      </div>
                    ) : (
                      <span className="text-gray-400 text-xs">
                        No phone
                      </span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>

        </table>
      </div>
    </div>
  );
}

export default LeadsTable;