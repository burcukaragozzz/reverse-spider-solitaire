import React from 'react';
import { Link } from 'react-router-dom';

import { PageContainer, Info, Rules, Rule, Title, GoBackButton, Icon } from './styled';

export const RulesPage: React.FC = () => {
    return (
        <PageContainer>
            <Info>
                Sort cards on the tableau so they are in increasing order, from Ace to King. Once a
                full sequence of ranks is built, it automatically moves to the foundation (cards
                cannot be placed on the foundation individually). The game is won once all cards are
                in the foundation.
            </Info>
            <Rules>
                <Title>Tableau</Title>
                <Rule>
                    Consists of ten piles. The first four piles start with 6 cards. The next six
                    piles start with five cards.
                </Rule>
                <Rule>
                    Cards can be moved between piles if they are one rank higher than the fully
                    visible face up card on the pile they are moving to. For example, a 9 can be
                    placed on top of a pile that has a 8 card face up.
                </Rule>
                <Rule>
                    Packs of cards can also be moved between piles if they continue a increasing
                    order from the fully visible face up card on the pile they are moving to. For
                    example, a 7 8 9 pack may move to a pile with 6, as long as they are all the
                    same suit.
                </Rule>
            </Rules>
            <Rules>
                <Title>Stock</Title>
                <Rule>Consists of 104 cards, composed of 8 sequences of same suit.</Rule>
                <Rule> Can only be dealt if all piles in tableau have cards in them.</Rule>
                <Rule>There is only one full pass through the stock.</Rule>
            </Rules>
            <Rules>
                <Title>Foundation</Title>
                <Rule>Ten foundation piles that must be filled by full increasing suits.</Rule>
                <Rule>
                    Cards cannot be moved to foundation piles directly. A full increasing suit pack
                    must be made on the tableau, and then that pack will move to the first empty
                    foundation pile.
                </Rule>
            </Rules>
            <Link to={'/'}>
                <GoBackButton>
                    <Icon src={'/icons/left-arrow.png'} width={36} />
                    Back Home
                </GoBackButton>
            </Link>
        </PageContainer>
    );
};
