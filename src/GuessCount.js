/**
 * Created by benjamin on 12/03/2019.
 */
import React from 'react'
import './GuessCount.css'
import PropTypes from 'prop-types'

const GuessCount = ({guesses}) => <div className="guesses">{guesses}</div>

GuessCount.propTypes = {
    guesses: PropTypes.number.isRequired,
}
export default GuessCount