import { StyleSheet, View, Image, Text,  } from "react-native";


export default function BadBunny(){
    return(

        <View>
        
          <Image source={require('./assets/Benito.jpeg')} style={styles.badBunny}/>

          <Image source={require('./assets/FotoP.png')} style={styles.Fperfil}/> 
          <Text style={styles.TPerfil}>Tefiña Guillén</Text>
          <Text style={styles.TPN2}>Yesterday</Text>
          <Image source={require('./assets/Campana.png')} style={styles.Campana}/>

          <Text style={styles.Texto1}> ¡POR FÍN! Bad Bunny en El Salvador </Text>
          <Text style={styles.Texto2} > La gira del artista puertorriqueño lo ha llevado a diferentes ciudades de latinoamérica, este sábado finalmente será el turno de nuestro país. Así lo anunció Miguel el manager de Benito. </Text>

          <Image source={require('./assets/Ubicación.png')} style={styles.ubicacion}/>
          <Text style={styles.TextUbi}> Centro ¡Supérate!Merlet </Text>

          <Image source={require('./assets/Calendario.png')} style={styles.Calendario}/>
          <Text style={styles.TextCal}> Viernes 6 de diciembre</Text>

          <Image source={require('./assets/Corazon.png')} style={styles.Corazon}/>
          <Text style={styles.TextCor}> Tikets disponibles en el C1 </Text>

        </View>
    )
}


const styles=StyleSheet.create ({
    badBunny:{
        width: 365,
        height: 330,
        borderRadius: 15,
        marginLeft:12,
        marginRight: 0,
        marginTop: -70,
        borderColor: 'blue' 
    },
    Fperfil:{
        width: 50,
        height: 50,
        alignItems:'left',
        marginTop: 10,
        color:'red'
    },
    TPerfil:{
        fontSize: 20,
        marginLeft:60,
        marginTop:-50,
    },
    TPN2:{
        fontSize: 10,
        marginLeft: 60,
    },
    Campana:{
        marginLeft:310,
        marginTop: -30,
        width: 25,
        height: 25,
        
    },

    Texto1:{
        fontSize: 35,
        marginTop: 25,
        textAlign:'center',
    },
    Texto2:{
        fontSize: 15,
        marginTop: 5,
        textAlign:'center',
        
    },
    ubicacion:{
        width: 25,
        height: 25,
        marginTop: 20,
        marginLeft: 35
        
    },
    TextUbi:{
        fontSize: 15,
        marginLeft: 70,
        marginTop: -20
    },
    Calendario:{
        width: 25,
        height: 25,
        marginLeft: 35,
        marginTop: 20
        
    },
    TextCal:{
        fontSize: 15,
        marginLeft: 70,
        marginTop: -20
    },
    Corazon:{
        width: 25,
        height: 25,
        marginLeft: 35,
        marginTop: 20
    },
    TextCor:{
        fontSize: 15,
        marginLeft: 70,
        marginTop: -20
    },


})