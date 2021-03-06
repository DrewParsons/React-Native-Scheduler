import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { getCourseNumber, getCourseTerm, hasConflict } from '../utils/course'; 


const Course = ({course, isDisabled, isSelected, select}) => (
    <TouchableOpacity style={styles[isSelected ? 'courseButtonSelected' : isDisabled ? 'courseButtonDisabled' : 'courseButton']}
        onPress={() => { if (!isDisabled) select(course); }}>
      <Text style={styles.courseText}>
        {`CS ${getCourseNumber(course)}\n${course.meets}`}
      </Text>
    </TouchableOpacity>
  );

const styles = StyleSheet.create({
    courseButton: {
      flex: 1,
      borderRadius: 5,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 10,
      height: 60,
      padding: 10,
      minWidth: 90,
      maxWidth: 90,
      backgroundColor: '#66b0ff',
    },
    courseText:{
      color: '#fff',
      fontSize: 12,
      textAlign: 'center',
    },
    courseButtonSelected:{
        flex: 1,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        height: 60,
        padding: 10,
        minWidth: 90,
        maxWidth: 90,
        backgroundColor: '#004a99'
    },
    courseButtonDisabled: {
        flex: 1,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        height: 60,
        padding: 10,
        minWidth: 90,
        maxWidth: 90,
        backgroundColor: '#d3d3d3'
    }
});

export default Course;
