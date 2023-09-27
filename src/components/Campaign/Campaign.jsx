import PropTypes from 'prop-types';

const Campaign = ({ campaign }) => {
    const { Picture, Title, Category, Category_bg, Card_bg, Text_button_bg } = campaign;

    const cardStyle = {
        backgroundColor: Card_bg,
        color: Text_button_bg,
        
    };

    const categoryStyle = {
        backgroundColor: Category_bg,
    };

    return (
        <div>
            <div className="card card-compact w-72 bg-base-100 shadow-xl mb-4" style={cardStyle}>
                <figure><img src={Picture} alt={Title} /></figure>
                <div className="card-body">
                    <div className="category" style={categoryStyle}>
                        {Category}
                    </div>
                    <h2 className="card-title font-medium text-lg">{Title}</h2>
                </div>
            </div>
        </div>
    );
};

Campaign.propTypes = {
    campaign: PropTypes.any,
};

export default Campaign;
