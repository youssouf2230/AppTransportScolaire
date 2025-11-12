export default function QuoteForm() {
    return (
        <section className="container mx-auto px-6 py-10">
            <h3 className="text-2xl font-bold text-primary mb-6">Request a Quote</h3>
            <form className="bg-gray-100 shadow-md rounded-lg p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                    type="text"
                    placeholder="Full Name"
                    className="border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-primary"
                />
                <input
                    type="text"
                    placeholder="Phone"
                    className="border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-primary"
                />
                <input
                    type="email"
                    placeholder="Email"
                    className="border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-primary"
                />
                <input
                    type="text"
                    placeholder="Bus Model"
                    className="border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-primary"
                />
                <input
                    type="text"
                    placeholder="Year"
                    className="border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-primary"
                />
                <div className="md:col-span-2">
                    <button className="bg-primary text-white px-6 py-2 rounded-md hover:bg-secondary transition">
                        SUBMIT NOW
                    </button>
                </div>
            </form>
        </section>
    );
}
