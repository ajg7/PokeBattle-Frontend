import React from "react";
import {connect} from "react-redux";

const OnDeck = props => {
    const { team } = props;

    return (
        <>
            <h2>Ready to Battle?</h2>
            <div>
                {team.map(member => {
                    if (member === null) {
                        return null
                    } else {
                        return(
                            <div>
                                <h2>{member.name}</h2>
                                <h2>{member.number}</h2>
                                <img src={member.img} alt={member.name} />
                            </div>
                        )
                    }
                })}
            </div>
        </>
    )
}

const mapStateToProps = state => {
    return {
        team: state.team
    }
}

export default connect(mapStateToProps, {})(OnDeck);