

// // import static org.junit.jupiter.api.Assertions.assertEquals;

// // import org.junit.jupiter.api.Test;
// import java.util.HashMap;
// import java.util.Map;
// import java.util.LinkedList;
// import java.util.List;
// import java.util.Scanner;

// public class Main {
//      public static Map<String, Profile> allUsers = new HashMap<String, Profile>();

//      public static void main(String[] args) {

//           // allUsers = new HashMap<String, Profile>();
//           Scanner scanner = new Scanner(System.in);
//           System.out.println("test");

//           while (true) {
//                System.out.println("Enter login or signup: ");
//                String option = scanner.nextLine();
//                if (option.equals("login")) {
//                     login(scanner);
//                } else if (option.equals("stop")) {
//                     break;
//                } else {
//                     createAccount(scanner);
//                }

//           }
//           scanner.close();

//      }

//      public static void login(Scanner scanner) {
  
//           System.out.println("Enter username:");

//           String input = scanner.nextLine();
//           System.out.println("Enter password");
//           String input2 = scanner.nextLine();
//           if (allUsers.containsKey(input) && allUsers.get(input).getPassword().equals(input2)) {
//                System.out.println("success");
//           } else {
//                System.out.println("error");
//           }
//           System.out.println("logged in");
         
//      }

//      public static void createAccount(Scanner scanner) {
      
//           System.out.println("Enter username: ");
//           String user = scanner.nextLine();
//           System.out.println("Enter password: ");
//           String pass = scanner.nextLine();
//           System.out.println("Enter your name: ");
//           String name = scanner.nextLine();
//           allUsers.put(user, new Profile(user, pass, name));


//      }

// }

