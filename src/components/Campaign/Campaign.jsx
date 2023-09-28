import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Campaign = ({ campaign }) => {
    const { id, Picture, Title, Category, Category_bg, Card_bg, Text_button_bg } = campaign;
     

    const cardStyle = {
        backgroundColor: Card_bg,
        color: Text_button_bg,
    };

    const categoryStyle = {
        backgroundColor: Category_bg,
    };
    return (
        <div>
            <Link to={`/campaign/${id}`}>
                <div className="card card-compact w-72 bg-base-100 shadow-xl mb-4" style={cardStyle}>
                    <figure><img src={Picture} alt={Title} /></figure>
                    <div className="card-body">
                        <div className="category w-20  p-2 border rounded-lg font-medium text-center" style={categoryStyle}>
                            {Category}
                        </div>
                        <h2 className="card-title font-medium text-lg">{Title}</h2>
                    </div>
                </div>
            </Link>
        </div>
    );
};

Campaign.propTypes = {
    campaign: PropTypes.any,
    
};

export default Campaign;
