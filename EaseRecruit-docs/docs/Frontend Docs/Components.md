---
sidebar_position: 5
---
## Components

The EaseRecruit application is built using a variety of reusable components, each designed to perform specific functions that enhance the overall user experience. Below are some key components:

- **DashboardHeader**: Displays a customizable header for dashboard pages, enhancing navigation and providing context to users.

- **FormInput**: A versatile input component that standardizes input fields across forms, ensuring a consistent user experience. It supports various input types (text, email, password, etc.) and integrates seamlessly with form validation.

- **FormSelect**: A reusable select dropdown component that allows users to choose from a list of options easily. It is customizable and can include features such as search functionality and multi-select.

- **FormTextarea**: A customizable textarea component designed for user feedback and comments. It supports dynamic resizing and character count display, improving usability for longer inputs.

- **EaseRecruitTable**: A dynamic table component that organizes and displays data in a structured format. It includes features like sorting, filtering, and pagination to enhance data accessibility.

- **PageBanner**: A visually appealing banner component that presents titles and subtitles for different sections of the application, providing users with clear context and improving navigation.

### Example of a Component

Here’s an example of how the **FormInput** component is implemented:

```jsx
import React from 'react';

const FormInput = ({ label, type, name, placeholder, register, required }) => {
    return (
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={name}>
                {label}
            </label>
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                ref={register({ required })}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
        </div>
    );
};

export default FormInput;
```