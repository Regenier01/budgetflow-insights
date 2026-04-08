# AI Rules & Tech Stack

## Tech Stack
- **Framework**: React 18 with Vite and TypeScript.
- **Styling**: Tailwind CSS for all styling, following a utility-first approach.
- **UI Components**: shadcn/ui (built on Radix UI) for accessible, unstyled components.
- **State Management**: Zustand for global client-side state (e.g., `budgetStore.ts`).
- **Data Fetching**: TanStack Query (React Query) for server-side state and caching.
- **Routing**: React Router DOM for client-side navigation.
- **Forms & Validation**: React Hook Form combined with Zod for schema-based validation.
- **Icons**: Lucide React for consistent iconography.
- **Charts**: Recharts for data visualization and dashboards.
- **Backend/Auth**: Supabase integration ready for database and authentication needs.

## Library Usage Rules

### UI & Styling
- **shadcn/ui**: Always check `src/components/ui/` before creating new low-level components. Use these as the foundation for all UI elements.
- **Tailwind CSS**: Use Tailwind classes for layout, spacing, and responsive design. Avoid writing custom CSS in `.css` files unless absolutely necessary.
- **Lucide React**: Use only Lucide icons to maintain visual consistency across the application.

### State & Data
- **Zustand**: Use for global UI state or data that needs to persist across the entire application session (e.g., uploaded budget data).
- **TanStack Query**: Use for all API interactions, including fetching, caching, and synchronizing server data.
- **Zod**: Define schemas for all data structures, especially for form validation and API responses.

### Components & Structure
- **Atomic Design**: Keep components small and focused. Create new files in `src/components/` for reusable logic and `src/pages/` for route-level views.
- **Responsive Design**: All new UI components must be responsive by default using Tailwind's mobile-first breakpoints (`sm:`, `md:`, `lg:`, etc.).
- **Toasts**: Use `sonner` (via the `toast` utility) for user feedback on actions like file uploads or form submissions.

### File Processing
- **XLSX**: Use the `xlsx` library for all Excel and CSV parsing logic, as seen in the `UploadPage`.