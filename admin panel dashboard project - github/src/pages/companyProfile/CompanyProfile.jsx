import { useState } from "react";
import ImageUpload from "../../components/ImageUpload";

export default function CompanyProfile() {

    const [companyData, setCompanyData] = useState({
        name: " ",
        email: " ",
        mobile: " ",
        address:
            " ",
        // map:
        //   "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d57242.0081345318!2d73.030606!3d26.273815!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418c5b1dfafdd7%3A0xf992fd41c21a238e!2sLaxmi%20Dairy%20%26%20Provision%20Store!5e0!3m2!1sen!2sin!4v1784465716972!5m2!1sen!2sin",
    });

    const handleChange = (e) => {
        setCompanyData({
            ...companyData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Company Profile Updated Successfully");
    };

    const mapUrl =
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d57242.0081345318!2d73.030606!3d26.273815!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418c5b1dfafdd7%3A0xf992fd41c21a238e!2sLaxmi%20Dairy%20%26%20Provision%20Store!5e0!3m2!1sen!2sin!4v1784465716972!5m2!1sen!2sin";

    return (
        <div className="p-6">

            {/* Breadcrumb */}

            <div className="mb-6">

                <h2 className="text-3xl font-semibold">
                    Company Profile
                </h2>

                <p className="text-gray-600 mt-2">
                    Dashboard /
                    <span className="text-blue-600">
                        {" "}Company Profile
                    </span>
                </p>

            </div>

            <div className="bg-white rounded-xl shadow p-6">

                <form onSubmit={handleSubmit}>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                        {/* LEFT */}

                        <div>

                            <label className="block font-medium mb-2">
                                Category Image
                            </label>

                            <ImageUpload
                                height="h-72"
                                text="Drag and drop"
                            />

                        </div>

                        {/* RIGHT */}

                        <div>

                            {/* Name */}

                            <div className="mb-4">

                                <label className="block font-medium mb-2">
                                    Name
                                </label>

                                <input
                                    type="text"
                                    name="name"
                                    value={companyData.name}
                                    onChange={handleChange}
                                    placeholder="Name"
                                    className="w-full border rounded-lg px-4 py-3 outline-none"
                                />

                            </div>

                            {/* Email */}

                            <div className="mb-4">

                                <label className="block font-medium mb-2">
                                    Email
                                </label>

                                <input
                                    type="email"
                                    name="email"
                                    value={companyData.email}
                                    onChange={handleChange}
                                    placeholder="Email"
                                    className="w-full border rounded-lg px-4 py-3 outline-none"
                                />

                            </div>

                            {/* Mobile */}

                            <div>

                                <label className="block font-medium mb-2">
                                    Mobile Number
                                </label>

                                <input
                                    type="text"
                                    name="mobile"
                                    value={companyData.mobile}
                                    onChange={handleChange}
                                    placeholder="Mobile Number"
                                    className="w-full border rounded-lg px-4 py-3 outline-none"
                                />

                            </div>

                        </div>

                    </div>
                    {/* Address */}

                    <div className="mt-6">

                        <label className="block font-medium mb-2">
                            Address
                        </label>

                        <textarea
                            rows="4"
                            name="address"
                            value={companyData.address}
                            onChange={handleChange}
                            placeholder="Address"
                            className="w-full border rounded-lg px-4 py-3 outline-none resize-none"
                        />

                    </div>

                    {/* Google Map URL */}

                    <div className="mt-6">

                        <label className="block font-medium mb-2">
                            Google Map URL
                        </label>

                       <textarea
                        rows="3"
                        placeholder="Google Map URL"
                        className="w-full border rounded-lg px-4 py-3 outline-none resize-none"
                    />

                    </div>
                    

                    {/* Google Map */}

                    <div className="mt-6">

                        <iframe
                            title="Company Location"
                            src={mapUrl}
                            width="100%"
                            height="320"
                            loading="lazy"
                            className="rounded-lg border"
                            allowFullScreen
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>

                    </div>

                    {/* Button */}

                    <div className="mt-8">

                        <button
                            type="submit"
                            className="bg-purple-700 hover:bg-purple-800 text-white px-8 py-3 rounded-lg font-medium transition"
                        >
                            Update Company Profile
                        </button>

                    </div>

                </form>

            </div>

        </div>
    );
}