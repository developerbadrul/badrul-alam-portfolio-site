/* eslint-disable react/prop-types */

const Container = ({children}) => {
    return (
        <div className="h-screen">
            {children}
        </div>
    );
};

export default Container;