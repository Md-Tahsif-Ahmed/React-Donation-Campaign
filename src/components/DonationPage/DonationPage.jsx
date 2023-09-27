import { FaDollarSign } from 'react-icons/fa';
import PropTypes from 'prop-types';

const DonationPage = ({ don }) => {
  const { Picture, Title, Category, Category_bg, Card_bg, Text_button_bg, Price } = don;

  const cardStyle = {
    backgroundColor: Card_bg,
  };

  const categoryStyle = {
    backgroundColor: Category_bg,
    color: Text_button_bg,
  };

  const colorStyle = {
    color: Text_button_bg,
  };

  const buttonStyle = {
    backgroundColor: Text_button_bg,
  };

  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-xl" style={cardStyle}>
        <figure><img className='h-full' src={Picture} alt={Title} /></figure>
        <div className="card-body">
          <div className="category w-20 p-2 border rounded-lg font-medium text-center py-0" style={categoryStyle}>
            {Category}
          </div>
          <h2 className="card-title font-medium text-lg py-0">{Title}</h2>
          <h3 className="font-bold flex items-center  py-0" style={colorStyle}>
            <span><FaDollarSign /></span>{Price}
          </h3>
          <div className="card-actions py-0">
            <button className="btn w-52 text-white font-bold py-1" style={buttonStyle}>Listen</button>
          </div>
        </div>
      </div>
    </div>
  );
};

DonationPage.propTypes = {
  don: PropTypes.shape({
    Picture: PropTypes.string.isRequired,
    Title: PropTypes.string.isRequired,
    Category: PropTypes.string.isRequired,
    Category_bg: PropTypes.string.isRequired,
    Card_bg: PropTypes.string.isRequired,
    Text_button_bg: PropTypes.string.isRequired,
    Price: PropTypes.number.isRequired,
  }).isRequired,
};

export default DonationPage;
