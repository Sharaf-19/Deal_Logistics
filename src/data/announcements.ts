/**
 * ========================================
 *  ANNOUNCEMENTS DATA FILE
 * ========================================
 *
 *  HOW TO UPDATE (Admin Guide):
 *
 *  1. ADD a new announcement:
 *     - Drop your poster image into: public/announcements/
 *     - Add a new object to the array below
 *
 *  2. REMOVE an announcement:
 *     - Set active: false  OR  delete the entry
 *
 *  3. REPLACE a poster:
 *     - Swap the image file in public/announcements/
 *     - Update the "image" path if the filename changed
 *
 *  4. REORDER:
 *     - Move entries up/down in the array
 *
 * ========================================
 */

export interface Announcement {
  id: string;
  title: string;
  category: 'Bachelor' | 'Master' | 'PhD' | 'Language' | 'Scholarship';
  image: string;
  deadline_date: string;
  active: boolean;
}

export const announcements: Announcement[] = [
  {
    id: '1',
    title: 'PHD Scholarship Program',
    category: 'Scholarship',
    image: '/announcements/prog1.jpeg',
    deadline_date: '2026-08-30',
    active: true,
  },
  {
    id: '2',
    title: "Bachelor's Scholarship Program",
    category: 'Bachelor',
    image: '/announcements/prog2.jpeg',
    deadline_date: '2026-07-15',
    active: true,
  },
  {
    id: '3',
    title: 'Chinese Language Program',
    category: 'Language',
    image: '/announcements/prog3.jpeg',
    deadline_date: '2026-06-01',
    active: true,
  },
  {
    id: '4',
    title: 'Chinese Language - Spring 2026',
    category: 'Scholarship',
    image: '/announcements/prog4.jpeg',
    deadline_date: '2026-07-01',
    active: true,
  },
  {
    id: '5',
    title: 'Master’s Scholarship Program',
    category: 'Master',
    image: '/announcements/prog5.jpeg',
    deadline_date: '2026-06-01',
    active: true,
  },
  {
    id: '6',
    title: 'Bachelor’s Scholarship Program',
    category: 'Scholarship',
    image: '/announcements/prog6.jpeg',
    deadline_date: '2026-05-31',
    active: true,
  },
];

export const getActiveAnnouncements = () => announcements.filter(a => a.active);
