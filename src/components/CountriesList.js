import { Link } from "react-router-dom";

function CountriesList(props) {
    const { countryList } = props;
        return (
            <div
            className="col-5"
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'
            }}
            >
            <div className="list-group">
                {countryList.map((country) => {
                return (
                    <div key={country.alpha3Code}>
                    <img
                        src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                        alt="country-flag"
                    />
                    <ul className="list-group-item list-group-item-action">
                        <Link to={`/countries/${country.alpha3Code}`}>
                        {country.name.common}
                        </Link>
                    </ul>
                    </div>
                );
                })}
            </div>
        </div>
    );
    }

export default CountriesList;