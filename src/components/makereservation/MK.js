import React from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';
import countries from '../../Countries.json';
import worldLocation from "../../avis_locations2.json";
import { API_URL } from '../../core/constant';

class MKN extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            location: '',
            countryPick: '',
            date: '',
            time: '',
            return_location: '',
            return_date: '',
            return_time: '',
            age: '26',
            country: 'ID',
            user_id: '',
            offer_code: '',
            vehicle: '',
            locationName: '',
            searchData: [], // Add your data here
            searchResults: [],
            returnlocationName: '',
            returnsearchData: [], // Add your data here
            returnsearchResults: [],
            isShowOfferCode: false,
            isShowWizardCode: false,
            awd_number: '',
            coupon_code: '',
            wizard_number: '',
            last_name: '',
            excludedFields: ['NUM', 'Sitecode'],
            selectedLocation: null,
        }
    }

    submit(event) {
        event.preventDefault();

        Axios.post(
            `${API_URL}/api/booking/check`,
            // `http://localhost/lare/public/api/booking/check`,
            {
                location: this.state.location,
                date: this.state.date,
                time: this.state.time,
                return_location: this.state.return_location,
                return_date: this.state.return_date,
                return_time: this.state.return_time,
                age: this.state.age,
                country: this.state.country,
                user_id: this.state.user_id,
                offer_code: this.state.offer_code,
                vehicle: this.state.vehicle,
            },
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token'),
                }
            }
        ).then((res) => {
            Axios.get(
                `https://stage.abgapiservices.com/oauth/token/v1`,
                {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'client_id': '04e19f27',
                        'client_secret': '4ed319e489d262258325686bf0902603'
                    }
                }
            ).then((res) => {
                //  console.log(res.data.access_token);
                localStorage.setItem('bebe', res.data.access_token);
            });

            this.props.navigate('/choosecars', {
                state: {
                    location: this.state.location,
                    date: this.state.date,
                    time: this.state.time,
                    return_location: this.state.return_location == '' ? this.state.location : this.state.return_location,
                    return_date: this.state.return_date,
                    return_time: this.state.return_time,
                    age: this.state.age,
                    country: this.state.country,
                    user_id: this.state.user_id,
                    offer_code: this.state.offer_code,
                    vehicle: this.state.vehicle,
                    awd_number: this.state.awd_number,
                    coupon_code: this.state.coupon_code,
                    wizard_number: this.state.wizard_number,
                    last_name: this.state.last_name,
                    countryPick: this.state.countryPick,
                }
            });
        }).catch((error) => {
            if (error.response.status === 401) {
                alert('Please Sign In First');
            } else {
                alert(error.response.data.msg)
            }
        });
    }

    groupResultsByGroup() {
        const groupedResults = {};
        this.state.searchResults.forEach(result => {
            if (!groupedResults[result.group]) {
                groupedResults[result.group] = [];
            }
            groupedResults[result.group].push(result);
        });
        return Object.values(groupedResults);
    }

    groupResultsByGroupReturn() {
        const groupedResults = {};
        this.state.returnsearchResults.forEach(result => {
            if (!groupedResults[result.group]) {
                groupedResults[result.group] = [];
            }
            groupedResults[result.group].push(result);
        });
        return Object.values(groupedResults);
    }

    handleBackspaceOrDelete = (searchTerm) => {
        // Handle backspace or delete key
        if (searchTerm.trim() === "") {
            // Clear the search results and selected location when the input is empty
            this.setState({ searchResults: [], selectedLocation: null });
        }
    };

    location_change = (event) => {
        const searchTerm = event.target.value.toLowerCase();
        this.setState({
            location: searchTerm
        });
        console.log(event.key);
        if (event.key === 'Backspace' || event.key === 'Delete') {
            // Handle backspace or delete separately
            this.handleBackspaceOrDelete(searchTerm);
            return;
        }

        this.setState({ location: searchTerm });

        if (searchTerm.trim() === "") {
            // Clear the search results and selected location when the input is empty
            this.setState({ searchResults: [], selectedLocation: null });
            return;
        }

        const filteredResults = worldLocation.filter((item) => {
            // Check if the key is not in the excluded fields and a match is found in any field
            for (const key in item) {
                if (!this.state.excludedFields.includes(key) && item[key] && item[key].toString().toLowerCase().includes(searchTerm)) {
                    return true;
                }
            }

            // Additional grouping logic
            if (
                (item.Descriptor && item.Descriptor.toLowerCase().includes("airport")) ||
                (item.Address1 && item.Address1.toLowerCase().includes("airport")) ||
                (item.Address2 && item.Address2.toLowerCase().includes("airport"))
            ) {
                item.group = "Airport";
            } else if (item["Postal Code"] && item["Postal Code"].toString().trim() !== "") {
                item.group = "Neighborhood";
            } else {
                item.group = "City";
            }

            return false;
        });

        this.setState({ searchResults: filteredResults });
    }

    handleLocationClick = (selectedLocation) => {
        console.log('Selected Location:', selectedLocation);
        document.getElementById('locationValue').value = selectedLocation.Descriptor + ' ' + selectedLocation.Address1 + ', ' + selectedLocation.city + ', ' + selectedLocation.MNE;

        const descriptor = selectedLocation.Descriptor || "";
        const address1 = selectedLocation.Address1 || "";
        const city = selectedLocation.city || "";
        const mne = selectedLocation.MNE || "";

        const combinedLocation = `${descriptor} ${address1}, ${city}, ${mne}`;
        console.log('Combined Location:', combinedLocation);
        this.setState({
            location: selectedLocation.MNE,
            locationName: combinedLocation,
            countryPick: selectedLocation.Country,
            searchResults: [],
            selectedLocation: combinedLocation
        });
    };


    handleLocationClickReturn = (selectedLocation) => {
        console.log('Selected Location:', selectedLocation);
        document.getElementById('locationReturnValue').value = selectedLocation.Descriptor + ' ' + selectedLocation.Address1 + ', ' + selectedLocation.city + ', ' + selectedLocation.MNE;

        this.setState({
            return_location: selectedLocation.MNE,
            returnlocationName: selectedLocation.Descriptor,
            countryPick: selectedLocation.Country,
            returnsearchResults: [],
            selectedLocation: selectedLocation.Descriptor
        });
    };

    date_change(event) {
        this.setState({
            date: event.target.value,
            // add +2 days
            return_date: new Date(new Date(event.target.value).getTime() + 2 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
        })
    }

    time_change(event) {
        this.setState({
            time: event.target.value,
            return_time: event.target.value
        })
    }

    return_location_change(event) {
        const searchTerm = event.target.value.toLowerCase();
        this.setState({
            return_location: searchTerm
        });
        console.log(event.key);
        if (event.key === 'Backspace' || event.key === 'Delete') {
            // Handle backspace or delete separately
            this.handleBackspaceOrDelete(searchTerm);
            return;
        }

        this.setState({ return_location: searchTerm });

        if (searchTerm.trim() === "") {
            // Clear the search results and selected location when the input is empty
            this.setState({ returnsearchResults: [], selectedLocation: null });
            return;
        }

        const filteredResults = worldLocation.filter((item) => {
            // Check if the key is not in the excluded fields and a match is found in any field
            for (const key in item) {
                if (!this.state.excludedFields.includes(key) && item[key] && item[key].toString().toLowerCase().includes(searchTerm)) {
                    return true;
                }
            }

            // Additional grouping logic
            if (
                (item.Descriptor && item.Descriptor.toLowerCase().includes("airport")) ||
                (item.Address1 && item.Address1.toLowerCase().includes("airport")) ||
                (item.Address2 && item.Address2.toLowerCase().includes("airport"))
            ) {
                item.group = "Airport";
            } else if (item["Postal Code"] && item["Postal Code"].toString().trim() !== "") {
                item.group = "Neighborhood";
            } else {
                item.group = "City";
            }

            return false;
        });

        this.setState({ returnsearchResults: filteredResults });
    }

    return_date_change(event) {
        this.setState({
            return_date: event.target.value
        })
    }

    return_time_change(event) {
        this.setState({
            return_time: event.target.value
        })
    }

    age_change(event) {
        this.setState({
            age: event.target.value
        })
    }

    country_change(event) {
        this.setState({
            country: event.target.value
        })
    }
    render() {
        let publicUrl = process.env.PUBLIC_URL + '/';
        const myStyle = {
            backgroundImage: "url(" + publicUrl + "assets/images/resources/makereservation.avif)",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
        };
        const myLink = {
            color: "rgb(212, 0, 42)",
        };
        const myBorder = {
            borderBottom: "2px solid rgb(212, 0, 42)"
        }
        const myLinkDis = {
            color: "rgb(168, 168, 168)",
        };
        const myBorderDis = {
            borderBottom: "2px solid rgb(168, 168, 168)"
        }
        return (
            <>
                <section>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-sm-3'>
                                <p style={myLink}>1 Reserve a Rental Car</p>
                                <p style={myBorder}></p>
                            </div>
                            <div className='col-sm-3'>
                                <p style={myLinkDis}>2</p>
                                <p style={myBorderDis}></p>
                            </div>
                            <div className='col-sm-3'>
                                <p style={myLinkDis}>3</p>
                                <p style={myBorderDis}></p>
                            </div>
                            <div className='col-sm-3'>
                                <p style={myLinkDis}>4</p>
                                <p style={myBorderDis}></p>
                            </div>
                        </div>
                    </div>
                </section>
                <section style={myStyle}>
                    <div className='container'>
                        <div className='row mt-5'>
                            <div className='col-sm-12 text-center pt-5'>
                                <h2 style={{ color: "#000" }}>Book Online for the Best Rate with Avis </h2>
                            </div>
                        </div>
                        <form onSubmit={(e) => this.submit(e)}>
                            <div className='row mt-3 mb-3 p-2' style={{ backgroundColor: "rgb(255 255 255 / 20%)" }}>
                                <div className='col-sm-12'>
                                    <div className='row'>
                                        <div className='col-sm-6 p-0 border-end'>
                                            <div style={{ position: 'relative' }}>
                                                <input
                                                    required
                                                    type="text"
                                                    className='form-control input-avis py-3'
                                                    placeholder='Enter your pick-up location or zip code'
                                                    id='locationValue'
                                                    style={{ borderRadius: "0px" }}
                                                    onChange={(e) => this.location_change(e)}

                                                />

                                                {this.state.searchResults.length > 0 ? (
                                                    <div className='live-search bg-light p-2' style={{ position: 'absolute', zIndex: 1, width: '100%', maxHeight: '300px', overflowY: 'auto' }}>
                                                        {this.groupResultsByGroup().map((groupedResults, groupIndex) => (
                                                            <div key={groupIndex}>
                                                                <div className='d-flex' style={{ borderBottom: '1px solid #ddd' }}>
                                                                    <h5>{groupedResults[0].group}</h5>
                                                                    <span className='ms-auto'>{groupedResults.length} results</span>
                                                                </div>
                                                                {groupedResults.map((result, index) => (
                                                                    <div key={index} style={{ cursor: 'pointer', padding: '5px' }}>
                                                                        <p id='descriptionLoc' onClick={() => this.handleLocationClick(result)}>
                                                                            <strong className='text-primary'>{result.Descriptor}</strong>, {result.Address1}, {result?.city}, {result["Postal Code"] ?? 'undefined'} <strong className='text-primary'>{result.MNE}</strong>
                                                                        </p>

                                                                        {/* Include other fields you want to display */}
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        ))}
                                                    </div>
                                                ) : null}
                                            </div>
                                        </div>


                                        <div className='col-sm-3 p-0 border-end'>
                                            <input required type="date" className='form-control input-avis py-3' style={{ borderRadius: "0px" }} onChange={(e) => this.date_change(e)} />
                                        </div>
                                        <div className='col-sm-3 p-0'>
                                            <input required type="time" className='form-control input-avis py-3' style={{ borderRadius: "0px" }} onChange={(e) => this.time_change(e)} />
                                        </div>
                                    </div>
                                    <div className='row mt-2'>
                                        <div className='col-sm-6 p-0 border-end'>
                                            <div style={{ position: 'relative' }}>
                                                <input type="text" id='locationReturnValue' className='form-control input-avis py-3' placeholder='Return on same location' style={{ borderRadius: "0px" }} onChange={(e) => this.return_location_change(e)} />

                                                {this.state.returnsearchResults.length > 0 ? (
                                                    <div className='live-search bg-light p-2' style={{ position: 'absolute', zIndex: 1, width: '100%' }}>
                                                        {this.groupResultsByGroupReturn().map((groupedResults, groupIndex) => (
                                                            <div key={groupIndex}>
                                                                <div className='d-flex' style={{ borderBottom: '1px solid #ddd' }}>
                                                                    <h5>{groupedResults[0].group}</h5>
                                                                    <span className='ms-auto'>{groupedResults.length} results</span>
                                                                </div>
                                                                {groupedResults.map((result, index) => (
                                                                    <div key={index} style={{ cursor: 'pointer', padding: '5px' }}>
                                                                        <p id='descriptionLoc' onClick={() => this.handleLocationClickReturn(result)}>
                                                                            <strong className='text-primary'>{result.Descriptor}</strong>, {result.Address1}, {result?.city}, {result["Postal Code"] ?? 'undefined'} <strong className='text-primary'>{result.MNE}</strong>
                                                                        </p>

                                                                        {/* Include other fields you want to display */}
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        ))}
                                                    </div>
                                                ) : null}
                                            </div>
                                        </div>
                                        <div className='col-sm-3 p-0 border-end'>
                                            <input required type="date" className='form-control input-avis py-3' style={{ borderRadius: "0px" }} onChange={(e) => this.return_date_change(e)} value={this.state.return_date} />
                                        </div>
                                        <div className='col-sm-3 p-0'>
                                            <input required type="time" className='form-control input-avis py-3' style={{ borderRadius: "0px" }} onChange={(e) => this.return_time_change(e)} value={this.state.return_time} />
                                        </div>
                                    </div>
                                    <div className='row mt-2'>
                                        <div className='col-lg-2 col-sm-4 p-0'>
                                            <div className="input-group">
                                                <span className="input-group-text">Age</span>
                                                <select required className='form-control' style={{ borderRadius: "0px" }} onChange={(e) => this.setState({ age: e.target.value })}>
                                                    <option value={'26'} selected>25+</option>
                                                    <option value={'24'}>24</option>
                                                    <option value={'23'}>23</option>
                                                    <option value={'22'}>22</option>
                                                    <option value={'21'}>21</option>
                                                    <option value={'20'}>20</option>
                                                    <option value={'19'}>19</option>
                                                    <option value={'18'}>18</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className='col-lg-4 col-sm-4 p-0'>
                                            <div className="input-group">
                                                <span className="input-group-text">Country</span>
                                                <select required className='form-control' style={{ borderRadius: "0px" }} onChange={(e) => this.setState({ country: e.target.value })}>
                                                    {countries.map((c, index) =>
                                                        <option key={index} value={c.code} selected={c.name == "Indonesia" ? true : false}>{c.name}</option>
                                                    )}
                                                </select>
                                            </div>
                                        </div>
                                        {/* <div className='col-lg-2 col-sm-4 p-0'>
                                        <button className='btn btn-light w-100' style={{ borderRadius: "0px" }}>Add Customer ID *</button>
                                    </div> */}
                                        <div className='col-lg-2 col-sm-6 p-0 '>
                                            <button type='button' className='btn btn-light w-100' style={{ borderRadius: "0px" }} onClick={() => this.setState({ isShowWizardCode: !this.state.isShowWizardCode, isShowOfferCode: false })}>Avis Wizard Number</button>
                                        </div>
                                        <div className='col-lg-2 col-sm-6 p-0'>
                                            <button type='button' className='btn btn-light w-100' style={{ borderRadius: "0px" }} onClick={() => this.setState({ isShowOfferCode: !this.state.isShowOfferCode, isShowWizardCode: false })}>Offer Codes </button>
                                        </div>
                                        <div className='col-lg-2 col-sm-6 p-0'>
                                            <input className='form-control' placeholder='Vehicle Type *' style={{ borderRadius: "0px" }} />
                                        </div>
                                        <div className='col-sm-12 pb-3'>
                                            {/* <div className='row p-5 mx-1' style={{backgroundColor:"#fff"}}>
                                            <div className='col-sm-6'>
                                                <label>Enter your Fastbreak, rapidRez or online ID</label>
                                            </div>
                                            <div className='col-sm-3'>
                                                <input required type="text" placeholder='Fistt Name'/>
                                            </div>
                                            <div className='col-sm-3'>
                                                <input required type="text" placeholder='Last Name'/>
                                            </div>
                                        </div> */}
                                        </div>
                                    </div>
                                </div>
                                {this.state.isShowOfferCode ?
                                    <div className='container bg-light py-3'>
                                        <div className='row justify-content-start align-items-center'>
                                            <div className='col-sm-3'>
                                                <p className='text-center'>Enter a Discount Code</p>
                                            </div>
                                            <div className='col-sm-3'>
                                                <input className='form-control' type='text' name='awd_number' onChange={(e) => this.setState({ awd_number: e.target.value })} placeholder='AWD #' />
                                            </div>
                                            <div className='col-sm-3'>
                                                <input className='form-control' type='text' name='coupon_code' onChange={(e) => this.setState({ coupon_code: e.target.value })} placeholder='Coupon Code' />
                                            </div>
                                        </div>
                                    </div>
                                    : null}

                                {this.state.isShowWizardCode ?
                                    <div className='container bg-light py-3'>
                                        <div className='row justify-content-start align-items-center'>
                                            <div className='col-sm-4'>
                                                <p className='text-center'>Enter Wizard Number and Last Name</p>
                                            </div>
                                            <div className='col-sm-3'>
                                                <input className='form-control' type='text' name='wizard_number' onChange={(e) => this.setState({ wizard_number: e.target.value })} placeholder='Wizard Number' />
                                            </div>
                                            <div className='col-sm-3'>
                                                <input className='form-control' type='text' name='last_name' onChange={(e) => this.setState({ last_name: e.target.value })} placeholder='Last Name' />
                                            </div>
                                        </div>
                                    </div>
                                    : null}
                            </div>
                            <div className='row mt-2 pb-5'>
                                <div className='col-sm-12 text-center'>
                                    <button className="btn btn-avis" type="submit">Select My Car</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </section>
                <section>
                    <div className='container text-center'>
                        <div className='row py-4 border-bottom'>
                            <div className='col-sm-12'>
                                <h3 className='text-black'>ADDITIONAL INFROMATION</h3>
                            </div>
                        </div>
                        <div className='row pb-5 mt-2'>
                            <div className='col-sm-4'>
                                {/* <b>Reservations & Avis.com Assistance</b>
                                <p>1-800-230-4898</p> */}
                            </div>
                            <div className='col-sm-4'>
                                <b>Contact Us For More Information</b>
                                <p>sales@avis-id.com</p>
                                {/* <p>Monday - Friday 8am-5pm EST</p> */}
                            </div>
                            <div className='col-sm-4'>
                                {/* <b>Other Avis Telephone Numbers</b>
                                <p className='link-avis'>Worldwide Telephone Numbers</p> */}
                            </div>
                        </div>
                    </div>
                </section>
                {/* End Slogan One */}
            </>
        )
    }
}

function MK(props) {
    let navigate = useNavigate();
    return <MKN {...props} navigate={navigate} />
}

export default MK;