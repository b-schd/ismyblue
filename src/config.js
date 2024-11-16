export const MAX_ROUNDS = 8 // 2^6, hence max resolution of 1.
// Version 0.0.1 was the initial version.
// Version 0.0.2 implemented randomization of the probe color.
// Version 0.0.3 implemented a GLM for determining the sigmoid parameters and a color mask.
// Version 0.0.4 implemented the plot comparing to the population at the end.
// Version 0.0.5 implemented the about screen.
// Version 0.0.6 implemented the language and colorblindness options, and the local timestamp.
// Version 0.0.7 fixed the timestamp localization and moved the keys into a separate file.
// Version 0.0.8 fixed the stability of the GLM fit, added noise to the probe color, and randomized the button order
// it increased the number of rounds to 8 which in simulations led to better inferences.
export const VERSION = '0.1.0'

export const FIRST_COLOR = 'pink' // originally 'green'
export const SECOND_COLOR = 'red' // originally 'blue'
export const LOWER_BOUND = 300  // really 120, originally 150
export const UPPER_BOUND = 360  // really 240, originally 210
export const MIDPOINT = 330     // originally 180


export const BIN_POSITION = [
  134.301141318471, 153.503134757856, 158.56843732322, 160.302303286645, 162.514185616824,
  163.703518721884, 164.344468743918, 164.462960967657, 165.598525868342, 166.183872810368,
  166.569970631419, 167.274647778639, 168.062663168801, 168.100946287479, 168.740805551753,
  168.748424231721, 170.32506783527, 170.797793764671, 170.919085845105, 171.307445244332,
  171.395734028347, 171.400305114026, 172.199075693101, 172.61121428121, 172.830304931291,
  173.480824910454, 173.94544227512, 174.213265095317, 174.48866077117, 174.835812882413,
  174.954335063876, 175.131828116511, 175.650024274329, 175.697288622681, 175.808227496496,
  176.786011828223, 176.999731620381, 177.630359604473, 177.663397131833, 178.251972276788,
  178.446882053225, 179.233902232735, 179.239221933239, 179.327841575664, 180.760778066761,
  181.718757442617, 181.748027723212, 182.336602868167, 182.369640395527, 183.000268379619,
  183.213988171777, 184.404787597005, 184.868171883489, 185.164187117587, 187.169695068709,
  189.186857728744, 193.290658427174, 210.557520901061
]
export const BIN_COUNT = [
  0.008130081300813009, 0.008130081300813009, 0.016260162601626018, 0.008130081300813009,
  0.008130081300813009, 0.008130081300813009, 0.016260162601626018, 0.008130081300813009,
  0.016260162601626018, 0.008130081300813009, 0.032520325203252036, 0.008130081300813009,
  0.04065040650406504, 0.008130081300813009, 0.008130081300813009, 0.024390243902439025,
  0.016260162601626018, 0.008130081300813009, 0.024390243902439025, 0.04065040650406504,
  0.016260162601626018, 0.008130081300813009, 0.024390243902439025, 0.016260162601626018,
  0.04878048780487805, 0.016260162601626018, 0.016260162601626018, 0.07317073170731707,
  0.056910569105691054, 0.056910569105691054, 0.008130081300813009, 0.024390243902439025,
  0.008130081300813009, 0.008130081300813009, 0.04878048780487805, 0.016260162601626018,
  0.016260162601626018, 0.016260162601626018, 0.008130081300813009, 0.008130081300813009,
  0.008130081300813009, 0.008130081300813009, 0.008130081300813009, 0.008130081300813009,
  0.024390243902439025, 0.008130081300813009, 0.008130081300813009, 0.008130081300813009,
  0.008130081300813009, 0.016260162601626018, 0.008130081300813009, 0.008130081300813009,
  0.008130081300813009, 0.024390243902439025, 0.008130081300813009, 0.008130081300813009,
  0.008130081300813009, 0.008130081300813009
]
export const X_CDF = [
  134.301141318471, 134.301141318471, 153.503134757856, 153.503134757856, 158.56843732322,
  158.56843732322, 160.302303286645, 160.302303286645, 162.514185616824, 162.514185616824,
  163.703518721884, 163.703518721884, 164.344468743918, 164.344468743918, 164.462960967657,
  164.462960967657, 165.598525868342, 165.598525868342, 166.183872810368, 166.183872810368,
  166.569970631419, 166.569970631419, 167.274647778639, 167.274647778639, 168.062663168801,
  168.062663168801, 168.100946287479, 168.100946287479, 168.740805551753, 168.740805551753,
  168.748424231721, 168.748424231721, 170.32506783527, 170.32506783527, 170.797793764671,
  170.797793764671, 170.919085845105, 170.919085845105, 171.307445244332, 171.307445244332,
  171.395734028347, 171.395734028347, 171.400305114026, 171.400305114026, 172.199075693101,
  172.199075693101, 172.61121428121, 172.61121428121, 172.830304931291, 172.830304931291,
  173.480824910454, 173.480824910454, 173.94544227512, 173.94544227512, 174.213265095317,
  174.213265095317, 174.48866077117, 174.48866077117, 174.835812882413, 174.835812882413,
  174.954335063876, 174.954335063876, 175.131828116511, 175.131828116511, 175.650024274329,
  175.650024274329, 175.697288622681, 175.697288622681, 175.808227496496, 175.808227496496,
  176.786011828223, 176.786011828223, 176.999731620381, 176.999731620381, 177.630359604473,
  177.630359604473, 177.663397131833, 177.663397131833, 178.251972276788, 178.251972276788,
  178.446882053225, 178.446882053225, 179.233902232735, 179.233902232735, 179.239221933239,
  179.239221933239, 179.327841575664, 179.327841575664, 180.760778066761, 180.760778066761,
  181.718757442617, 181.718757442617, 181.748027723212, 181.748027723212, 182.336602868167,
  182.336602868167, 182.369640395527, 182.369640395527, 183.000268379619, 183.000268379619,
  183.213988171777, 183.213988171777, 184.404787597005, 184.404787597005, 184.868171883489,
  184.868171883489, 185.164187117587, 185.164187117587, 187.169695068709, 187.169695068709,
  189.186857728744, 189.186857728744, 193.290658427174, 193.290658427174, 210.557520901061,
  210.557520901061
]
export const Y_CDF = [
  0.0, 0.008130081300813009, 0.008130081300813009, 0.016260162601626018, 0.016260162601626018,
  0.032520325203252036, 0.032520325203252036, 0.04065040650406505, 0.04065040650406505,
  0.04878048780487806, 0.04878048780487806, 0.05691056910569107, 0.05691056910569107,
  0.07317073170731708, 0.07317073170731708, 0.0813008130081301, 0.0813008130081301,
  0.09756097560975611, 0.09756097560975611, 0.10569105691056913, 0.10569105691056913,
  0.13821138211382117, 0.13821138211382117, 0.14634146341463417, 0.14634146341463417,
  0.1869918699186992, 0.1869918699186992, 0.1951219512195122, 0.1951219512195122,
  0.2032520325203252, 0.2032520325203252, 0.22764227642276422, 0.22764227642276422,
  0.24390243902439024, 0.24390243902439024, 0.25203252032520324, 0.25203252032520324,
  0.2764227642276423, 0.2764227642276423, 0.3170731707317073, 0.3170731707317073,
  0.3333333333333333, 0.3333333333333333, 0.3414634146341463, 0.3414634146341463,
  0.36585365853658536, 0.36585365853658536, 0.38211382113821135, 0.38211382113821135,
  0.4308943089430894, 0.4308943089430894, 0.4471544715447154, 0.4471544715447154,
  0.4634146341463414, 0.4634146341463414, 0.5365853658536585, 0.5365853658536585,
  0.5934959349593495, 0.5934959349593495, 0.6504065040650405, 0.6504065040650405,
  0.6585365853658536, 0.6585365853658536, 0.6829268292682926, 0.6829268292682926,
  0.6910569105691057, 0.6910569105691057, 0.6991869918699187, 0.6991869918699187,
  0.7479674796747968, 0.7479674796747968, 0.7642276422764228, 0.7642276422764228,
  0.7804878048780488, 0.7804878048780488, 0.7967479674796748, 0.7967479674796748,
  0.8048780487804879, 0.8048780487804879, 0.8130081300813009, 0.8130081300813009, 0.821138211382114,
  0.821138211382114, 0.829268292682927, 0.829268292682927, 0.8373983739837401, 0.8373983739837401,
  0.8455284552845531, 0.8455284552845531, 0.8699186991869922, 0.8699186991869922,
  0.8780487804878052, 0.8780487804878052, 0.8861788617886183, 0.8861788617886183,
  0.8943089430894313, 0.8943089430894313, 0.9024390243902444, 0.9024390243902444,
  0.9186991869918704, 0.9186991869918704, 0.9268292682926834, 0.9268292682926834,
  0.9349593495934965, 0.9349593495934965, 0.9430894308943095, 0.9430894308943095,
  0.9674796747967486, 0.9674796747967486, 0.9756097560975616, 0.9756097560975616,
  0.9837398373983747, 0.9837398373983747, 0.9918699186991877, 0.9918699186991877, 1.0000000000000007
]
