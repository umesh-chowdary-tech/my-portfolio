import React, { useEffect, useState } from 'react';
import { Star } from 'react-feather';
import { db } from '../configs/fireBaseConfigs/config';
import {
  collection,
  addDoc,
  onSnapshot,
  query,
  orderBy,
  serverTimestamp,
} from 'firebase/firestore';

// Keep these in sync with the limits in firestore.rules
const MAX_LENGTH = { name: 60, role: 60, company: 60, text: 1000 };

// Old or hand-edited entries may hold a bad rating; Array(-1) would crash the list
const starCount = (rating) => Math.max(0, Math.min(5, Math.round(Number(rating)) || 0));

const TestimonialsSection = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [form, setForm] = useState({ name: '', role: '', company: '', text: '', rating: 5 });
  const [error, setError] = useState('');

  useEffect(() => {
    const q = query(collection(db, "testimonials"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        setTestimonials(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      },
      () => setError('Testimonials could not be loaded right now. Please check back later.')
    );
    return unsubscribe;
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  if (form.name.trim() && form.text.trim()) {
    setError('');
    try {
      await addDoc(collection(db, "testimonials"), {
        name: form.name.trim(),
        role: form.role.trim(),
        company: form.company.trim(),
        text: form.text.trim(),
        rating: Number(form.rating),
        createdAt: serverTimestamp(),
      });
      setForm({ name: '', role: '', company: '', text: '', rating: 5 });
    } catch (err) {
      setError('Sorry, your testimonial could not be sent. Please try again.');
    }
  }
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
    maxLength={MAX_LENGTH.name}
    required
  />
  <input
    type="text"
    name="role"
    placeholder="Your Role"
    className="border p-2 rounded w-full"
    value={form.role}
    onChange={handleChange}
    maxLength={MAX_LENGTH.role}
  />
  <input
    type="text"
    name="company"
    placeholder="Company Name"
    className="border p-2 rounded w-full"
    value={form.company}
    onChange={handleChange}
    maxLength={MAX_LENGTH.company}
  />
  <textarea
    name="text"
    placeholder="Your Testimonial"
    className="border p-2 rounded w-full"
    value={form.text}
    onChange={handleChange}
    maxLength={MAX_LENGTH.text}
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
  {error && <p className="text-sm text-red-600">{error}</p>}
</form>
<div className="max-h-[80vh] md:max-h-[400px] overflow-y-auto pr-2">
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6">
    {testimonials.map((item) => (
  <div key={item.id} className="bg-white p-6 rounded-lg shadow-md relative">
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
            {[...Array(starCount(item.rating))].map((_, i) => (
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