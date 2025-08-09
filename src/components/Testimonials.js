import React, { useEffect, useState } from 'react';
import { Star, Trash2 } from 'react-feather';
import { db } from '../configs/fireBaseConfigs/config';
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  orderBy,
} from 'firebase/firestore';


const TestimonialsSection = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [form, setForm] = useState({ name: '', role: '', company: '', text: '', rating: 5 });

  useEffect(() => {
    const q = query(collection(db, "testimonials"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setTestimonials(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });
    return unsubscribe;
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  if (form.name && form.text) {
    await addDoc(collection(db, "testimonials"), {
      ...form,
      rating: Number(form.rating),
      createdAt: new Date(),
    });
    setForm({ name: '', role: '', company: '', text: '', rating: 5 });
  }
};

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "testimonials", id));
  };

  return (
    <div className="space-y-8" data-test-id="testimonials-section">
      <h2 className="text-3xl font-bold border-b pb-2">TESTIMONIALS</h2>
      <form onSubmit={handleSubmit} className="bg-gray-100 p-2 sm:p-4 rounded-lg mb-4 sm:mb-6 space-y-2">
  <input
    type="text"
    name="name"
    placeholder="Your Name"
    className="border p-2 rounded w-full"
    value={form.name}
    onChange={handleChange}
    required
  />
  <input
    type="text"
    name="role"
    placeholder="Your Role"
    className="border p-2 rounded w-full"
    value={form.role}
    onChange={handleChange}
  />
  <input
    type="text"
    name="company"
    placeholder="Company Name"
    className="border p-2 rounded w-full"
    value={form.company}
    onChange={handleChange}
  />
  <textarea
    name="text"
    placeholder="Your Testimonial"
    className="border p-2 rounded w-full"
    value={form.text}
    onChange={handleChange}
    required
  />
  <label className="block">
    Rating:
    <select
      name="rating"
      value={form.rating}
      onChange={handleChange}
      className="ml-2 border rounded"
    >
      {[5, 4, 3, 2, 1].map((r) => (
        <option key={r} value={r}>{r}</option>
      ))}
    </select>
  </label>
  <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
    Submit Testimonial
  </button>
</form>
<div className="max-h-[80vh] md:max-h-[400px] overflow-y-auto pr-2">
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6">
    {testimonials.map((item) => (
  <div key={item.id} className="bg-white p-6 rounded-lg shadow-md relative">
    <button
      onClick={() => handleDelete(item.id)}
      className="absolute top-2 right-2 text-red-500 hover:text-red-700"
      title="Delete"
    >
      <Trash2 size={18} />
    </button>
    <div className="mb-4">
      <div className="flex flex-col gap-1">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-semibold">{item.name}</h3>
            {(item.role || item.company) && (
              <p className="text-sm text-gray-500">
                {item.role}{item.role && item.company ? ', ' : ''}{item.company}
              </p>
            )}
          </div>
          <div className="flex items-center ml-4">
            {[...Array(item.rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
        </div>
      </div>
    </div>
    <p className="text-gray-600">"{item.text}"</p>
  </div>
))}
  </div>
</div>
    </div>
  );
};

export default TestimonialsSection;