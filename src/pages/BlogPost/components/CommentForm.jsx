import { useState } from 'react';

export default function CommentForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ comment: '', name: '', email: '', website: '', save: false });

  const onChange = e => {
    const { name, value, type, checked } = e.target;
    setForm(f => ({ ...f, [name]: type === 'checkbox' ? checked : value }));
  };

  const onSubmit = e => {
    e.preventDefault();
    if (form.comment.trim() && form.name.trim() && form.email.trim()) {
      setSubmitted(true);
    }
  };

  const inputBase = 'h-11 w-full rounded-xl px-4 text-[14px] bg-white transition-colors duration-150 outline-none focus:ring-0';
  const inputStyle = { border: '1px solid var(--line)', color: 'var(--navy)' };

  return (
    <div className="mt-12 pt-10" style={{ borderTop: '1px solid var(--line)' }}>
      <h2 className="font-display text-[22px] font-bold mb-2" style={{ color: 'var(--navy)' }}>
        Leave a Reply
      </h2>
      <p className="text-[13px] mb-6" style={{ color: 'var(--muted)' }}>
        Your email address will not be published. Required fields are marked *
      </p>

      {submitted ? (
        <div className="rounded-2xl p-6 text-center" style={{ background: 'var(--soft)' }}>
          <p className="text-[15px] font-semibold mb-1" style={{ color: 'var(--navy)' }}>Thanks for your comment!</p>
          <p className="text-[13.5px]" style={{ color: 'var(--muted)' }}>It will appear once reviewed.</p>
        </div>
      ) : (
        <form onSubmit={onSubmit} noValidate>
          <textarea
            name="comment"
            value={form.comment}
            onChange={onChange}
            rows={5}
            placeholder="Type Your Comments *"
            required
            className="w-full rounded-xl p-4 text-[14px] bg-white outline-none resize-none transition-colors duration-150"
            style={{ border: '1px solid var(--line)', color: 'var(--navy)' }}
          />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
            <input
              name="name"
              value={form.name}
              onChange={onChange}
              type="text"
              placeholder="Name *"
              required
              className={inputBase}
              style={inputStyle}
            />
            <input
              name="email"
              value={form.email}
              onChange={onChange}
              type="email"
              placeholder="Email *"
              required
              className={inputBase}
              style={inputStyle}
            />
            <input
              name="website"
              value={form.website}
              onChange={onChange}
              type="url"
              placeholder="Website"
              className={inputBase}
              style={inputStyle}
            />
          </div>

          <label className="flex items-start gap-2.5 mt-4 cursor-pointer">
            <input
              name="save"
              type="checkbox"
              checked={form.save}
              onChange={onChange}
              className="mt-0.5 shrink-0 w-4 h-4 rounded cursor-pointer accent-[var(--teal)]"
            />
            <span className="text-[13px] leading-relaxed" style={{ color: 'var(--muted)' }}>
              Save my name, email, and website in this browser for the next time I comment.
            </span>
          </label>

          <button
            type="submit"
            className="mt-6 h-11 px-8 rounded-xl text-[14px] font-semibold text-white transition-opacity hover:opacity-85 cursor-pointer"
            style={{ background: 'var(--teal)' }}
          >
            Post A Comment
          </button>
        </form>
      )}
    </div>
  );
}
