import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

let AsansContainer = styled.div`
    font-family: "Comfortaa";
    background-color: rgba(0,0,0,.1);
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
`;

let AsansCard = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 900px;
    width: 100%;
`;

let Label = styled.p`
    font-size: 20px;
`;

let Description = styled.p`
    font-size: 14px;
`;

export default class AsansPlayer extends Component {
    static propTypes = {
        id: PropTypes.number.isRequired,
        labelCard: PropTypes.string.isRequired,
        previewCard: PropTypes.string.isRequired,
        descriptionCard: PropTypes.string.isRequired,
        complexityCard: PropTypes.string.isRequired,
        totalTimeCard: PropTypes.number.isRequired,
        asans: PropTypes.arrayOf(PropTypes.shape({
            titleAsan: PropTypes.string.isRequired,
            descriptionAsan: PropTypes.string.isRequired,
            imageAsan: PropTypes.string.isRequired,
            iconAsan: PropTypes.string.isRequired,
            voiceAsan: PropTypes.string.isRequired,
            delayAsan: PropTypes.number.isRequired
        })).isRequired
    }

    render() {
        let {
            labelCard,
            descriptionCard
        } = this.props;

        return (
            <AsansContainer>
                <AsansCard>
                    <Label>{ labelCard }</Label>
                    <Description>{ descriptionCard }</Description>
                </AsansCard>
            </AsansContainer>
        )
    }
}