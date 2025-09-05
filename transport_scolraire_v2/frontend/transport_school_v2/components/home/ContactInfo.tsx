export default function ContactInfo() {
    return (
        <section className="bg-white py-8">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6">
                <div>
                    <h3 className="text-xl font-bold text-primary mb-4">Contact Information</h3>
                    <p className="text-gray-700">C & J Bus Repair Inc.</p>
                    <p>9001 Pillsbury Ave S</p>
                    <p>Minneapolis, MN 55420</p>
                    <p className="mt-3">Local: <span className="font-semibold">(952) 881-7044</span></p>
                    <p>Toll Free: <span className="font-semibold">(800) 328-0743</span></p>
                    <p>Fax: <span className="font-semibold">(952) 881-7178</span></p>
                </div>
                <div>
                    <h3 className="text-xl font-bold text-primary mb-4">Looking to sell your motor coach?</h3>
                    <img src="/bus.png" alt="Buses and More" className="h-24" />
                </div>
            </div>
        </section>
    );
}
